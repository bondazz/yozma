import { generateLocaleSitemap } from '@/lib/sitemap-helper';

export async function GET() {
    return generateLocaleSitemap('tr');
}
Dun
