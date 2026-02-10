import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load env variables
dotenv.config({ path: '.env.local' });

const API_KEY = process.env.DEEPSEEK_API_KEY;
const LANG = 'az';
const BASE_DIR = process.cwd();
const TOPICS_FILE = path.join(BASE_DIR, 'yuxular.txt');
const DREAMS_DATA_DIR = path.join(BASE_DIR, 'src/data/dreams/az');

const categoryPaths = {
    az: 'yuxu-yozmalari',
    tr: 'ruya-tabirleri',
    en: 'dream-meaning'
};

const cleanSlug = (text) => text.toLowerCase()
    .replace(/ə/g, 'e').replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ı/g, 'i')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

async function run() {
    if (!API_KEY) {
        console.error('❌ DEEPSEEK_API_KEY .env.local faylında tapılmadı!');
        return;
    }

    try {
        const content = await fs.readFile(TOPICS_FILE, 'utf-8');
        const topics = content.split('\n').map(t => t.trim()).filter(t => t && !t.startsWith('//'));

        if (topics.length === 0) {
            console.log('✨ yuxular.txt faylı boşdur. Emal ediləcək mövzu yoxdur.');
            return;
        }

        console.log(`🚀 Toplam ${topics.length} mövzu emal edilməyə başlanır...`);

        // Get existing dreams for internal linking
        const files = await fs.readdir(DREAMS_DATA_DIR);
        const existingDreams = [];
        for (const file of files) {
            if (file.endsWith('.json')) {
                const data = JSON.parse(await fs.readFile(path.join(DREAMS_DATA_DIR, file), 'utf-8'));
                existingDreams.push({ slug: data.slug, title: data.title.replace(/Yuxuda | görmək/g, '').trim() });
            }
        }

        for (const topic of topics) {
            console.log(`\n📝 Hazırlanır: "${topic}"...`);
            const slug = cleanSlug(topic);

            const prompt = `
            Task: Create a 1000-word MASTERPIECE dream interpretation for: "${topic}"
            Language: az
            
            SEO & CONTENT:
            - Min 1000 words.
            - Style: Professional, human-like, deep psychology.
            - HTML: Use H2, H3, P, STRONG, UL, LI. No markdown.
            - Internal Linking: If you mention any of these keywords, use <a href="/az/${categoryPaths.az}/[slug]">[keyword]</a>:
              ${existingDreams.map(d => `${d.title} (slug: ${d.slug})`).join(', ')}

            JSON ONLY:
            {
              "title": "Clean Title",
              "seoTitle": "SEO Title",
              "seoDescription": "Meta Desc",
              "keywords": "10+ keywords",
              "excerpt": "Summary",
              "category": "Nature | Animals | Feelings | Objects | Action | Mystic",
              "content": "HTML Content",
              "faqs": [{"question": "Q1", "answer": "A1"}]
            }`;

            const response = await fetch("https://api.deepseek.com/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "model": "deepseek-chat",
                    "messages": [
                        { "role": "system", "content": "You are a professional SEO writer. Output ONLY valid JSON." },
                        { "role": "user", "content": prompt }
                    ],
                    "response_format": { "type": "json_object" }
                })
            });

            const data = await response.json();
            const result = JSON.parse(data.choices[0].message.content);

            const post = {
                slug,
                ...result,
                date: new Date().toISOString(),
                lang: 'az',
                relatedSlugs: existingDreams.slice(0, 5).map(d => d.slug)
            };

            await fs.writeFile(path.join(DREAMS_DATA_DIR, `${slug}.json`), JSON.stringify(post, null, 2));
            console.log(`✅ Tamamlandı: ${slug}.json`);
        }

        // Clear the file
        await fs.writeFile(TOPICS_FILE, '// Mövzular uğurla emal edildi. Yenilərini əlavə edə bilərsiniz.\n');
        console.log('\n✨ Bütün növbə tamamlandı! Saytda nəticələrə baxa bilərsiniz.');

    } catch (error) {
        console.error('❌ Xəta baş verdi:', error);
    }
}

run();
