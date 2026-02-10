'use server';

import { saveDreamPost, getAllDreams } from '@/lib/dream-storage';

const cleanSlug = (text: string) => text.toLowerCase()
    .replace(/ə/g, 'e').replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ı/g, 'i')
    .replace(/i̇/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const categoryPaths: Record<string, string> = {
    az: 'yuxu-yozmalari',
    tr: 'ruya-tabirleri',
    en: 'dream-meaning'
};

const promptTranslations: Record<string, any> = {
    az: {
        titleSuffix: "nə deməkdir? 2026-cı il Ən Geniş Analiz",
        snippetH2: "nə deməkdir?",
        analysisH2: "Detallı Analiz",
        religiousH2: "Dini Mənbələrə Görə",
        psychologicalH2: "Psixoloji Baxış",
        tableH2: "Mövzu ilə bağlı Məlumat Cədvəli",
        inverseH2: "Yuxudan Sonra Nə Etməli?",
        tableHeaders: "Detal | Yozumu | Məna"
    },
    tr: {
        titleSuffix: "ne demek? 2026 En Kapsamlı Tabir",
        snippetH2: "ne demek?",
        analysisH2: "Detaylı Analiz",
        religiousH2: "Dini Kaynaklara Göre",
        psychologicalH2: "Psikolojik Bakış",
        tableH2: "Konuyla İlgili Bilgi Tablosu",
        inverseH2: "Rüyadan Sonra Ne Yapılmalı?",
        tableHeaders: "Detay | Tabiri | Anlamı"
    },
    en: {
        titleSuffix: "meaning? 2026 Most Comprehensive Analysis",
        snippetH2: "meaning?",
        analysisH2: "Detailed Analysis",
        religiousH2: "According to Religious Sources",
        psychologicalH2: "Psychological Perspective",
        tableH2: "Information Table About the Subject",
        inverseH2: "What to Do After the Dream?",
        tableHeaders: "Detail | Meaning | Significance"
    }
};

export async function generateDreamContent(topic: string, lang: string) {
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) throw new Error('DeepSeek API Key missing');

    const slug = cleanSlug(topic);

    // Get existing dreams to build internal links
    const existingDreams = await getAllDreams(lang);
    const linkingDictionary = existingDreams.map(id => ({
        slug: id.slug,
        title: id.title.replace(/Yuxuda | görmək/g, '').trim()
    }));
    const existingSlugs = linkingDictionary.map(d => d.slug);

    const t = promptTranslations[lang] || promptTranslations['en'];

    const prompt = `
    You are a world-class SEO content writer, dream psychologist, and HTML architect.
    Task: Create a 1000-1200 word SEO MASTERPIECE dream interpretation for: "${topic}"
    Language: ${lang}
    
    SEO MASTER TEMPLATE STRUCTURE:
    1. Title (H1): Engaging, includes year (e.g., "${topic} ${t.titleSuffix}").
    2. Highlight Box (Definition): A 40-50 word ${lang} summary for the Google Snippet.
    3. Content: 
       - H2: "${topic} ${t.snippetH2}" (Snippet-friendly direct answer).
       - H2: ${t.analysisH2} (Use H3s for Colors, Actions, Sizes in ${lang}).
       - H2: ${t.religiousH2} (Religious references like Ibn Sirin, Nablusi for local context).
       - H2: ${t.psychologicalH2} (Freud, Jung analysis in ${lang}).
       - H2: ${t.tableH2} (HTML Table with ${t.tableHeaders}).
       - H2: ${t.inverseH2} (Add a section about a "dua" or "psychological exercise" related to this dream in ${lang}).
    
    CONTENT RULES (STRICT):
    - NO BRACKETS: Never include text in brackets like "(Snippet)", "(Snippet Cavab)", "(Definition)", or "(H2)".
    - NO META-TALK: Never include meta-explanations. Do NOT say things like "Google Snippet üçün cavab budur" or "Bu hissə dini baxışdır". Just write the content.
    - NO BOLDING IN HIGHLIGHT BOX: The "highlightBox" field should not contain HTML or markdown bolding. Just plain text.
    - Min 1000 words. Very deep, professional, and academic yet accessible.
    - NO Markdown. Use strictly semantic HTML (H2, H3, P, STRONG, UL, LI, TABLE, TH, TD).
    - DO NOT include closing FAQ intros like "FAQ: Dream...".
    - Internal Linking: If you mention keywords related to these existing posts, use <a href="/${lang}/${categoryPaths[lang]}/[slug]">[keyword]</a>:
      ${existingSlugs.join(', ')}
    - Tone: Authoritative, academic, and professional.
    
    JSON OUTPUT FORMAT (MANDATORY):
    {
      "title": "Clean H1 Title",
      "seoTitle": "SEO Optimized Title",
      "seoDescription": "Meta Description (150-160 chars)",
      "keywords": "10-15 LSI keywords separated by comma",
      "excerpt": "Brief summary for listing pages",
      "highlightBox": "The 40-50 word snippet definition",
      "category": "Animals | Nature | Action | Objects | Mystic | Feelings",
      "ratingValue": 4.9,
      "reviewCount": 142,
      "video": {
        "url": "https://www.youtube.com/embed/example",
        "title": "Video title about this dream",
        "thumbnailUrl": "/video-thumb.jpg",
        "uploadDate": "${new Date().toISOString().split('T')[0]}"
      },
      "content": "Full HTML Content (No MD)",
      "faqs": [
        {"question": "Question 1", "answer": "Answer 1"},
        {"question": "Question 2", "answer": "Answer 2"},
        {"question": "Question 3", "answer": "Answer 3"}
      ]
    }
    `;

    try {
        const response = await fetch("https://api.deepseek.com/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "model": "deepseek-chat",
                "messages": [
                    { "role": "system", "content": "You are a professional SEO writer. You output ONLY valid JSON. Your writing style is 100+ readability, human-like, and authoritative. STRICT RULE: NEVER include bracketed terms like (Snippet), (Snippet Cavab), or (Definition) in any field. The content must be 'clean' for the end-reader." },
                    { "role": "user", "content": prompt }
                ],
                "response_format": { "type": "json_object" },
                "max_tokens": 4000
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(`DeepSeek Error: ${data.error?.message || response.statusText}`);

        const result = JSON.parse(data.choices[0].message.content);

        const post: any = {
            slug,
            ...result,
            date: new Date().toISOString(),
            lang,
            relatedSlugs: existingDreams.slice(0, 5).map(d => d.slug)
        };

        await saveDreamPost(post);
        return post;
    } catch (error) {
        console.error("Content Generation Error:", error);
        throw error;
    }
}

export async function generateMultiDreamContent(mainTopic: string, lang: string) {
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) throw new Error('DeepSeek API Key missing');

    const subTopicPrompt = `Given "${mainTopic}", list 3 highly searched sub-variations in ${lang}. Return ONLY a JSON object: {"topics": ["a", "b", "c"]}`;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "model": "deepseek-chat",
            "messages": [{ "role": "user", "content": subTopicPrompt }],
            "response_format": { "type": "json_object" }
        })
    });

    const data = await response.json();
    const { topics } = JSON.parse(data.choices[0].message.content);

    // Parallel generation
    const results = await Promise.all(topics.map((topic: string) => generateDreamContent(topic, lang)));

    const slugs = results.map(r => r.slug);
    for (const post of results) {
        post.relatedSlugs = slugs.filter(s => s !== post.slug);
        await saveDreamPost(post);
    }

    return results;
}
