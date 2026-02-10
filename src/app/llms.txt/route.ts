import { getBaseUrl, getBrandName } from '@/lib/utils/url';
import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = getBaseUrl();
    const brand = getBrandName();

    const content = `# ${brand} - Dream Interpretation Platform

Welcome to ${brand}, a professional platform for dream analysis and interpretation.

## Architecture
- Framework: Next.js 14/15 (App Router)
- Language Support: Azerbaijani (az), Turkish (tr), English (en)
- Caching: ISR with 1 hour revalidation
- Search: Bond AI (LLM-powered dream analyzer)

## Main Sections
- /az/yuxu-yozmalari - AZ Dream Dictionary
- /tr/ruya-tabirleri - TR Dream Dictionary
- /en/dream-meaning - EN Dream Dictionary

## API & Integrations
- Database: Supabase (PostgreSQL)
- AI Analysis: DeepSeek API (via Bond AI)

## SEO
- Sitemap: ${baseUrl}/index_sitemap.xml
- Robots: ${baseUrl}/robots.txt
`;

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
        },
    });
}
Dun
