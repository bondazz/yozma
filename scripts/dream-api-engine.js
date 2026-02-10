const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// 🛠️ CONFIG
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, serviceRoleKey);

const TARGET_LANG = process.argv[2] || 'az';

const getTableName = (lang) => {
    if (lang === 'tr') return 'dreams_tr';
    if (lang === 'en') return 'dreams_en';
    return 'dreams';
};

async function generateWithAPI(topics, lang) {
    // [MOD] Using 'gemini-2.0-flash' as per user request/curl test
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
Generate exactly ${topics.length} 1000+ word SEO dream interpretation articles in JSON format for the following topics in [${lang}]:
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
    "lang": "${lang}",
    "seo_title": "SEO Title",
    "seo_description": "Meta desc",
    "keywords": "k1, k2, ...",
    "rating_value": 4.9,
    "review_count": 250,
    "faqs": [{"question": "Q1?", "answer": "A1"}],
    "related_slugs": []
  }
]

CRITICAL: Return ONLY the raw JSON Array. No markdown formatting, no code blocks. Just [ ... ].
`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Cleanup potential markdown debris
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();

        return JSON.parse(text);
    } catch (error) {
        if (error.message.includes('429')) {
            return { error: 'rate-limit' };
        }
        console.error('❌ API Error:', error.message);
        return null;
    }
}

async function runEngine() {
    console.log(`\n🚀 [G-ENGINE V5] Gemini 2.0 Flash Engine Initialized`);
    console.log(`🌍 Language: ${TARGET_LANG.toUpperCase()} | Key: ${process.env.GEMINI_API_KEY.substring(0, 8)}...`);

    while (true) {
        // 1. FETCH FROM QUEUE
        const { data: topicsData, error: fetchError } = await supabase
            .from('manual_dreams')
            .select('*')
            .eq('lang', TARGET_LANG)
            .limit(1); // Process 1 by 1 for maximum detailed content & rate limit safety

        if (fetchError) {
            console.error('❌ DB Error:', fetchError.message);
            break;
        }

        if (!topicsData || topicsData.length === 0) {
            console.log('📭 Queue empty. Standing by...');
            await new Promise(r => setTimeout(r, 10000));
            continue;
        }

        const topics = topicsData.map(d => d.topic);
        console.log(`📡 Requesting: [${topics.join(', ')}]`);

        // 2. GENERATE
        const result = await generateWithAPI(topics, TARGET_LANG);

        if (result && result.error === 'rate-limit') {
            console.warn('⚠️ API Rate Limit (429) hit. Cooling down for 60 seconds...');
            await new Promise(r => setTimeout(r, 60000));
            continue;
        }

        if (result && Array.isArray(result)) {
            const posts = result;
            console.log(`✅ Received ${posts.length} articles.`);

            // 3. SAVE DIRECTLY TO DB
            console.log(`💾 Saving to database...`);

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
                rating_value: p.rating_value || p.ratingValue || 4.9,
                review_count: p.review_count || p.reviewCount || 100,
                faqs: p.faqs || [],
                related_slugs: p.related_slugs || p.relatedSlugs || []
            }));

            const { error: upsertError } = await supabase
                .from(getTableName(TARGET_LANG))
                .upsert(dbRows);

            if (upsertError) {
                console.error('❌ DB Upsert Error:', upsertError.message);
            } else {
                console.log('✨ Database Sync Complete.');

                // 4. CLEANUP
                const ids = topicsData.map(d => d.id);
                await supabase.from('manual_dreams').delete().in('id', ids);
                console.log('🧹 Queue Updated.');
            }
        } else {
            console.error('⚠️ Invalid API response. Retrying batch in 15s.');
            await new Promise(r => setTimeout(r, 15000));
        }

        console.log('--- Moving to next item ---');
        await new Promise(r => setTimeout(r, 2000));
    }
}

runEngine();
