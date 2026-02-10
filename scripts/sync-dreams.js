require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !serviceRoleKey) {
    console.error('❌ Supabase URL or Key missing in .env.local');
    process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

async function syncToDatabase() {
    const dreamsDir = path.join(process.cwd(), 'src/data/dreams/az');

    if (!fs.existsSync(dreamsDir)) {
        console.error(`❌ Directory not found: ${dreamsDir}`);
        process.exit(1);
    }

    const files = fs.readdirSync(dreamsDir);
    console.log(`📡 Found ${files.length} dream files. Starting sync...`);

    for (const file of files) {
        if (!file.endsWith('.json')) continue;

        try {
            const filePath = path.join(dreamsDir, file);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            const post = {
                slug: content.slug,
                title: content.title,
                excerpt: content.excerpt,
                highlight_box: content.highlightBox || content.excerpt || '',
                content: content.content,
                category: content.category,
                date: content.date,
                lang: content.lang,
                seo_title: content.seoTitle,
                seo_description: content.seoDescription,
                keywords: content.keywords,
                og_image: content.ogImage,
                rating_value: content.ratingValue || 5.0,
                review_count: content.reviewCount || Math.floor(Math.random() * 50) + 10,
                video: content.video,
                faqs: content.faqs,
                related_slugs: content.relatedSlugs || []
            };

            const { error } = await supabaseAdmin
                .from('dreams')
                .upsert(post);

            if (error) {
                console.error(`❌ Error syncing ${file}:`, error.message);
            } else {
                console.log(`✅ Synced: ${post.slug}`);
            }
        } catch (error) {
            console.error(`❌ System error with ${file}:`, error.message);
        }
    }

    console.log('🚀 Sync completed!');
    process.exit(0);
}

syncToDatabase();
