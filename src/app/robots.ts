import { locales } from '@/i18n/config';
import { getBaseUrl } from '@/lib/utils/url';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl();

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/index_sitemap.xml`,
    };
}
