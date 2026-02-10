const { chromium } = require('playwright');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// 🛠️ DATABASE CONFIG
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceRoleKey) {
    console.error('❌ Missing database environment variables. Check .env.local');
    process.exit(1);
}
const supabase = createClient(supabaseUrl, serviceRoleKey);

// 🌐 URLS
const GEMINI_URL = 'https://gemini.google.com/app';
const TARGET_LANG = process.argv[2] || 'az';

const getTableName = (lang) => {
    if (lang === 'tr') return 'dreams_tr';
    if (lang === 'en') return 'dreams_en';
    return 'dreams';
};

async function runBot() {
    console.log(`\n⚡ [ENGINE] Starting Direct-to-DB Automation for [${TARGET_LANG.toUpperCase()}]`);
    console.log(`📅 Timestamp: ${new Date().toLocaleString()}\n`);

    const browser = await chromium.launch({
        headless: false,
        args: [
            '--disable-blink-features=AutomationControlled',
            '--start-maximized'
        ]
    });
    // Create incognito context with full viewport
    const context = await browser.newContext({
        viewport: null
    });
    const page = await context.newPage();

    try {
        console.log('🌐 Opening Gemini...');
        await page.goto(GEMINI_URL);

        // Wait for prompt area - User must be logged in in their default browser profile or this one
        console.log('⏳ Waiting for Gemini to be ready...');
        try {
            await page.waitForSelector('div[contenteditable="true"]', { timeout: 15000 });
        } catch (e) {
            console.log('⚠️ Prompt area not found immediately. Please ensure you are logged into Gemini in the opened browser.');
            await page.waitForSelector('div[contenteditable="true"]', { timeout: 300000 }); // Wait up to 5 mins for manual login
        }

        let loop = true;
        let totalCreated = 0;

        while (loop) {
            // 1. FETCH TOPICS DIRECTLY FROM DB
            const { data: topicsData, error: fetchError } = await supabase
                .from('manual_dreams')
                .select('*')
                .eq('lang', TARGET_LANG)
                .limit(4); // 4 topics per batch is optimal for Gemini Word Count vs Speed

            if (fetchError) {
                console.error('❌ DB Error:', fetchError.message);
                break;
            }

            if (!topicsData || topicsData.length === 0) {
                console.log('📭 Queue is empty. Bot shutting down.');
                break;
            }

            const topics = topicsData.map(d => d.topic);
            console.log(`📦 Processing Batch [${topics.join(', ')}]`);

            // 2. GENERATE WITH GEMINI
            const prompt = `
Generate 1000+ word SEO dream interpretation articles in JSON format for the following topics in [${TARGET_LANG}]:
[${topics.join(', ')}]

STRUCTURE:
[
  {
    "slug": "url-friendly-slug",
    "title": "Professional Title (Include 2026)",
    "excerpt": "Compelling summary",
    "highlight_box": "Short definition box content",
    "content": "HTML: Use H2, H3, <strong>, <table>, <ul> tags. 1000+ words per article. Include detailed scenarios, religious, historical and psychological views.",
    "category": "Pick relevant",
    "date": "${new Date().toISOString()}",
    "lang": "${TARGET_LANG}",
    "seo_title": "SEO Title",
    "seo_description": "Meta desc",
    "keywords": "k1, k2, ...",
    "rating_value": 4.9,
    "review_count": 250,
    "faqs": [{"question": "Q1?", "answer": "A1"}],
    "related_slugs": []
  }
]

CRITICAL: Return ONLY the raw JSON Array. No chat, no markdown blocks, no text around it. Just [ ... ].
`;

            await page.click('div[contenteditable="true"]');
            await page.keyboard.press('Control+A');
            await page.keyboard.press('Backspace');
            await page.fill('div[contenteditable="true"]', prompt);
            await page.keyboard.press('Enter');

            console.log('🤖 Gemini is writing... (this takes ~1-2 mins for high word count)');

            // Wait for completion (Copy button)
            await page.waitForSelector('button[aria-label="Copy"]', { timeout: 600000 });

            // Extract content
            const rawOutput = await page.evaluate(() => {
                const pre = document.querySelector('pre');
                if (pre) return pre.innerText;
                const msgs = document.querySelectorAll('.message-content');
                return msgs[msgs.length - 1]?.innerText || '';
            });

            // 3. PARSE AND SAVE TO DB DIRECTLY
            try {
                const cleanJson = rawOutput.replace(/```json/g, '').replace(/```/g, '').trim();
                const posts = JSON.parse(cleanJson);

                if (!Array.isArray(posts)) throw new Error('Not an array');

                console.log(`💾 Saving ${posts.length} posts to [${getTableName(TARGET_LANG)}]...`);

                const dbRows = posts.map(p => ({
                    slug: p.slug,
                    title: p.title,
                    excerpt: p.excerpt,
                    highlight_box: p.highlight_box || p.highlightBox || '',
                    content: p.content,
                    category: p.category,
                    date: p.date,
                    lang: p.lang,
                    seo_title: p.seo_title || p.seoTitle || p.title,
                    seo_description: p.seo_description || p.seoDescription || p.excerpt,
                    keywords: p.keywords,
                    rating_value: p.rating_value || p.ratingValue || 4.5,
                    review_count: p.review_count || p.reviewCount || 10,
                    faqs: p.faqs || [],
                    related_slugs: p.related_slugs || p.relatedSlugs || []
                }));

                const { error: upsertError } = await supabase
                    .from(getTableName(TARGET_LANG))
                    .upsert(dbRows);

                if (upsertError) throw upsertError;

                console.log(`✅ Successfully saved to DB.`);
                totalCreated += posts.length;

                // 4. CLEANUP TOPICS
                const ids = topicsData.map(d => d.id);
                await supabase.from('manual_dreams').delete().in('id', ids);
                console.log('🧹 Cleaned up topics from queue.');

            } catch (err) {
                console.error('❌ Parse/Save Error:', err.message);
                console.log('Raw output was:', rawOutput.substring(0, 100) + '...');
                // We keep topics in DB if it failed to save
            }

            console.log(`✨ Processed ${totalCreated} articles total.`);
            console.log('-------------------------------------------');
            await new Promise(r => setTimeout(r, 3000));
        }

    } catch (e) {
        console.error('❌ Fatal Bot Error:', e.message);
    } finally {
        await browser.close();
        console.log('🏁 Bot session closed.');
    }
}

runBot();
