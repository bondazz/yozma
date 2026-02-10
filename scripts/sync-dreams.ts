import { saveDreamPost, DreamPost } from '../src/lib/dream-storage';
import fs from 'fs';
import path from 'path';

async function syncToDatabase() {
    const dreamsDir = path.join(process.cwd(), 'src/data/dreams/az');
    const files = fs.readdirSync(dreamsDir);

    console.log(`📡 Found ${files.length} dream files. Starting sync...`);

    for (const file of files) {
        if (!file.endsWith('.json')) continue;

        try {
            const filePath = path.join(dreamsDir, file);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            // Map JSON to DreamPost interface including default values for missing DB fields
            const post: DreamPost = {
                ...content,
                highlightBox: content.highlightBox || content.excerpt || '',
                ratingValue: content.ratingValue || 5.0,
                reviewCount: content.reviewCount || Math.floor(Math.random() * 50) + 10,
                relatedSlugs: content.relatedSlugs || []
            };

            await saveDreamPost(post);
            console.log(`✅ Synced: ${post.slug}`);
        } catch (error) {
            console.error(`❌ Error syncing ${file}:`, error);
        }
    }

    console.log('🚀 Sync completed!');
    process.exit(0);
}

syncToDatabase();
