import { locales } from '@/i18n/config';
import { getBaseUrl } from '@/lib/utils/url';
import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = getBaseUrl();

    // Generate sitemap index XML
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${locales.map(locale => `
    <sitemap>
        <loc>${baseUrl}/sitemap_${locale}.xml</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>`).join('')}
</sitemapindex>`;

    return new NextResponse(sitemapIndex, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
        },
    });
}
