import { generateLocaleSitemap } from '@/lib/sitemap-helper';

export const dynamic = 'force-dynamic';
export async function GET() {
    return generateLocaleSitemap('tr');
}
