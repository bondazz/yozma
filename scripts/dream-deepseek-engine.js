const OpenAI = require("openai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

// 🛠️ CONFIG
const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY,
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, serviceRoleKey);

const TARGET_LANG = process.argv[2] || 'az';
const CONCURRENCY_LIMIT = 10; // Eyni anda 10 sorğu

const getTableName = (lang) => {
    if (lang === 'tr') return 'dreams_tr';
    if (lang === 'en') return 'dreams_en';
    return 'dreams';
};

async function processTopic(topicData) {
    const topic = topicData.topic;
    const id = topicData.id;

    console.log(`📡 [GENERATING] Topic: ${topic}...`);

    const prompt = `
Generate a 1000+ word SEO dream interpretation article in JSON format for the topic: "${topic}" in [${TARGET_LANG}].

STRUCTURE:
{
  "slug": "url-friendly-slug",
  "title": "Professional Title (Include 2026)",
  "excerpt": "Compelling summary",
  "highlight_box": "Short definition box content",
  "content": "HTML: Use H2, H3, <strong>, <table>, <ul> tags. 1000+ words article. Include detailed scenarios, religious, historical and psychological views.",
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

CRITICAL: Return ONLY the raw JSON object. No markdown formatting, no code blocks. Just the object { ... }.
`;

    try {
        const response = await openai.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                { role: "system", content: "You are a professional SEO content writer and dream interpreter. Return valid JSON only." },
                { role: "user", content: prompt },
            ],
            stream: false,
            response_format: { type: 'json_object' }
        });

        let text = response.choices[0].message.content;
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const p = JSON.parse(text);

        // 💾 Save directly to DB
        const row = {
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
        };

        const { error: upsertError } = await supabase
            .from(getTableName(TARGET_LANG))
            .upsert(row);

        if (upsertError) throw upsertError;

        // 🧹 Cleanup topic from queue
        await supabase.from('manual_dreams').delete().eq('id', id);

        console.log(`✅ [SUCCESS] Finished: ${topic}`);
        return true;
    } catch (error) {
        console.error(`❌ [ERROR] Topic "${topic}":`, error.message);
        return false;
    }
}

async function runEngine() {
    console.log(`\n🚀 [DEEPSEEK-TURBO V2] High-Speed Parallel Engine (10 Threads)`);
    console.log(`🌍 Language: ${TARGET_LANG.toUpperCase()}\n`);

    while (true) {
        // 1. Fetch 10 topics at once
        const { data: topicsData, error: fetchError } = await supabase
            .from('manual_dreams')
            .select('*')
            .eq('lang', TARGET_LANG)
            .limit(CONCURRENCY_LIMIT);

        if (fetchError) {
            console.error('❌ DB Fetch Error:', fetchError.message);
            break;
        }

        if (!topicsData || topicsData.length === 0) {
            console.log('📭 Queue empty. Standing by (10s)...');
            await new Promise(r => setTimeout(r, 10000));
            continue;
        }

        console.log(`📦 Batch Size: ${topicsData.length}. Launching parallel threads...\n`);

        // 2. Launch 10 parallel processes
        const tasks = topicsData.map(topicData => processTopic(topicData));
        await Promise.all(tasks);

        console.log('\n✨ Batch complete. Cooldown 2s...\n');
        await new Promise(r => setTimeout(r, 2000));
    }
}

runEngine();
