import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load env vars
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
    console.log('Starting migration to Supabase...');

    const baseDir = path.join(process.cwd(), 'src/data/dreams');
    if (!fs.existsSync(baseDir)) {
        console.log('No local dreams found to migrate.');
        return;
    }

    const languages = fs.readdirSync(baseDir);

    for (const lang of languages) {
        const langDir = path.join(baseDir, lang);
        if (!fs.statSync(langDir).isDirectory()) continue;

        const files = fs.readdirSync(langDir);
        console.log(`\nMigrating ${files.length} dreams for language: ${lang}`);

        for (const file of files) {
            if (!file.endsWith('.json')) continue;

            const content = JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf-8'));

            const { error } = await supabase
                .from('dreams')
                .upsert({
                    slug: content.slug,
                    title: content.title,
                    excerpt: content.excerpt,
                    highlight_box: content.highlightBox,
                    content: content.content,
                    category: content.category,
                    date: content.date,
                    lang: content.lang,
                    seo_title: content.seoTitle,
                    seo_description: content.seoDescription,
                    keywords: content.keywords,
                    og_image: content.ogImage,
                    rating_value: content.ratingValue,
                    review_count: content.reviewCount,
                    video: content.video,
                    faqs: content.faqs,
                    related_slugs: content.relatedSlugs
                });

            if (error) {
                console.error(`Error migrating ${file}:`, error.message);
            } else {
                console.log(`Successfully migrated: ${content.slug}`);
            }
        }
    }

    console.log('\nMigration finished!');
}

migrate();
