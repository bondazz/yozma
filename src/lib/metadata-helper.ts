import { getDreamBySlug } from '@/lib/dream-storage';
import { Metadata } from 'next';
import { getBaseUrl, getBrandName } from '@/lib/utils/url';

export async function generateDreamMetadata(slug: string, locale: string): Promise<Metadata> {
    const dream = await getDreamBySlug(slug, locale);
    if (!dream) return { title: 'Not Found' };

    const baseUrl = getBaseUrl();
    const slugMap: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const canonicalUrl = `${baseUrl}/${locale}/${slugMap[locale]}/${slug}`;

    return {
        title: dream.seoTitle || dream.title,
        description: dream.seoDescription || dream.excerpt,
        keywords: dream.keywords,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'az-AZ': `${baseUrl}/az/yuxu-yozmalari/${slug}`,
                'tr-TR': `${baseUrl}/tr/ruya-tabirleri/${slug}`,
                'en-US': `${baseUrl}/en/dream-meaning/${slug}`,
            },
        },
        openGraph: {
            title: dream.seoTitle || dream.title,
            description: dream.seoDescription || dream.excerpt,
            url: canonicalUrl,
            type: 'article',
            publishedTime: dream.date,
            locale: locale,
            images: [
                {
                    url: dream.ogImage || `${baseUrl}/og-dream.jpg`,
                    width: 1200,
                    height: 630,
                    alt: dream.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: dream.seoTitle || dream.title,
            description: dream.seoDescription || dream.excerpt,
            images: [dream.ogImage || `${baseUrl}/og-dream.jpg`],
        }
    };
}

export async function generateArchiveMetadata(locale: string, letter?: string): Promise<Metadata> {
    const slugMap: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const titles: Record<string, string> = {
        az: letter ? `${letter.toUpperCase()} Hərfi ilə Başlayan Yuxular | Yuxu Yozmaları` : 'Yuxu Yozmaları Kataloqu | A-dan Z-yə Yuxu Yozma',
        tr: letter ? `${letter.toUpperCase()} Harfi ile Başlayan Rüyalar | Rüya Tabirleri` : 'Rüya Tabirleri Rehberi | A-dan Z-ye Rüya Tabiri',
        en: letter ? `Dreams Starting with ${letter.toUpperCase()} | Dream Meanings` : 'Dream Meanings Dictionary | A-Z Dream Interpretation'
    };

    const descriptions: Record<string, string> = {
        az: letter ? `${letter.toUpperCase()} hərfi ilə başlayan bütün yuxuların peşəkar və dini yozmaları. Xəyallarınızın sirrini kəşf edin.` : 'Xəyallarınızın sirrini kəşf edin. A-dan Z-yə ən geniş və peşəkar yuxu yozmaları kataloqu.',
        tr: letter ? `${letter.toUpperCase()} harfi ile başlayan tüm rüyaların profesyonel ve dini tabirleri. Rüyalarınızın sırlarını keşfedin.` : 'Rüyalarınızın sırlarını keşfedin. A\'dan Z\'ye en kapsamlı ve profesyonel rüya tabirleri rehberi.',
        en: letter ? `All dream interpretations and meanings starting with the letter ${letter.toUpperCase()}. Discover the secrets of your dreams.` : 'Discover the secrets of your dreams. The most comprehensive A-Z dream interpretation dictionary.'
    };

    const keywords: Record<string, string[]> = {
        az: ['yuxu yozmalari', `${letter || 'a'}-z yuxu yozmalari`, 'yuxu kitabi'],
        tr: ['rüya tabirleri', `${letter || 'a'}-z rüya tabirleri`, 'rüya yorumları'],
        en: ['dream meaning', `${letter || 'a'}-z dream meanings`, 'dream interpretation']
    };

    const baseUrl = getBaseUrl();
    const canonicalUrl = letter
        ? `${baseUrl}/${locale}/${slugMap[locale]}/${letter.toLowerCase()}`
        : `${baseUrl}/${locale}/${slugMap[locale]}`;

    return {
        title: titles[locale],
        description: descriptions[locale],
        keywords: keywords[locale],
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'az-AZ': `${baseUrl}/az/yuxu-yozmalari${letter ? `/${letter.toLowerCase()}` : ''}`,
                'tr-TR': `${baseUrl}/tr/ruya-tabirleri${letter ? `/${letter.toLowerCase()}` : ''}`,
                'en-US': `${baseUrl}/en/dream-meaning${letter ? `/${letter.toLowerCase()}` : ''}`,
            },
        },
        openGraph: {
            title: titles[locale],
            description: descriptions[locale],
            url: canonicalUrl,
            type: 'website',
            locale: locale,
            siteName: getBrandName(),
            images: [
                {
                    url: `${baseUrl}/${locale === 'az' ? 'yuxu_yozma.webp' : locale === 'tr' ? 'ruya_tabirleri.webp' : 'dream_meanings.webp'}`,
                    width: 1200,
                    height: 630,
                    alt: titles[locale],
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale],
            description: descriptions[locale],
            images: [`${baseUrl}/${locale === 'az' ? 'yuxu_yozma.webp' : locale === 'tr' ? 'ruya_tabirleri.webp' : 'dream_meanings.webp'}`],
        }
    };
}

export async function generateHomeMetadata(locale: string): Promise<Metadata> {
    const brand = getBrandName();
    const titles: Record<string, string> = {
        az: `${brand} - Peşəkar Yuxu Yozma Platforması | Yuxuların Mənası`,
        tr: `${brand} - Profesyonel Rüya Tabirleri Platformu | Rüya Yorumları`,
        en: `${brand} - Professional Dream Interpretation Platform | Dream Meanings`
    };

    const descriptions: Record<string, string> = {
        az: 'Ən dəqiq və peşəkar yuxu yozmaları platforması. Yuxularınızın psixoloji və mənəvi analizini kəşf edin. Bond AI ilə saniyələr içində yuxu analizi alın.',
        tr: 'En doğru ve profesyonel rüya tabirleri platformu. Rüyalarınızın psikolojik ve manevi analizini keşfedin. Bond AI ile saniyeler içinde rüya analizi alın.',
        en: 'The most accurate and professional dream interpretation platform. Discover the psychological and spiritual analysis of your dreams. Get dream analysis in seconds with Bond AI.'
    };

    const keywords: Record<string, string[]> = {
        az: ['yuxu yozmalari', 'yuxu yozma', 'bond ai', 'yuxularin menasi', 'bond.az', 'yuxu kitabi', 'yuxu yozmasi'],
        tr: ['rüya tabirleri', 'rüya yorumları', 'bond ai', 'rüyaların anlamı', 'bond.az', 'rüya tabiri', 'rüya yorumu'],
        en: ['dream interpretation', 'dream meanings', 'bond ai', 'meaning of dreams', 'bond.az', 'dream analysis', 'dream symbols']
    };

    const baseUrl = getBaseUrl();
    const canonicalUrl = `${baseUrl}/${locale}`;

    return {
        title: titles[locale],
        description: descriptions[locale],
        keywords: keywords[locale],
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'az-AZ': `${baseUrl}/az`,
                'tr-TR': `${baseUrl}/tr`,
                'en-US': `${baseUrl}/en`,
            },
        },
        openGraph: {
            title: titles[locale],
            description: descriptions[locale],
            url: canonicalUrl,
            type: 'website',
            locale: locale,
            siteName: getBrandName(),
            images: [
                {
                    url: `${baseUrl}/og-main.png`,
                    width: 1200,
                    height: 630,
                    alt: `${getBrandName()} - Dream Interpretation`,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: titles[locale],
            description: descriptions[locale],
            images: [`${baseUrl}/og-main.png`],
        }
    };
}
