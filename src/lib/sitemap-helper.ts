import { getAllDreams } from '@/lib/dream-storage';
import { getBaseUrl } from '@/lib/utils/url';

export async function generateLocaleSitemap(locale: string) {
    try {
        const baseUrl = getBaseUrl();
        const dreams = await getAllDreams(locale);

        const slugMap: Record<string, string> = {
            az: 'yuxu-yozmalari',
            tr: 'ruya-tabirleri',
            en: 'dream-meaning'
        };

        const staticPages = [
            '',
            `/${slugMap[locale]}`,
            '/contact',
            '/privacy',
            '/terms',
            '/cookies',
            '/help-center',
            '/legal-notice'
        ];

        const staticUrls = staticPages.map(page => {
            return `    <url>
        <loc>${baseUrl}/${locale}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`;
        }).join('\n');

        const dreamUrls = dreams.map(dream => {
            let lastmod;
            try {
                lastmod = dream.date ? new Date(dream.date).toISOString() : new Date().toISOString();
            } catch (e) {
                lastmod = new Date().toISOString();
            }

            return `    <url>
        <loc>${baseUrl}/${locale}/${slugMap[locale]}/${dream.slug}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`;
        }).join('\n');

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${dreamUrls}
</urlset>`;

        return new Response(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error(`Sitemap Error (${locale}):`, error);
        return new Response('<?xml version="1.0" encoding="UTF-8"?><error>Internal Server Error</error>', {
            status: 500,
            headers: { 'Content-Type': 'application/xml' }
        });
    }
}
