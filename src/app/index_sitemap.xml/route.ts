import { locales } from '@/i18n/config';
import { getBaseUrl } from '@/lib/utils/url';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const baseUrl = getBaseUrl();

        const sitemaps = locales.map(locale => `    <sitemap>
        <loc>${baseUrl}/sitemap_${locale}.xml</loc>
    </sitemap>`).join('\n');

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;

        return new Response(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error('Sitemap Index Error:', error);
        return new Response('<?xml version="1.0" encoding="UTF-8"?><error>Internal Server Error</error>', {
            status: 500,
            headers: { 'Content-Type': 'application/xml' }
        });
    }
}
