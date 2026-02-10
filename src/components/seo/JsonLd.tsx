import React from 'react';
import { DreamPost } from '@/lib/dream-storage';
import { getBaseUrl } from '@/lib/utils/url';

export function BreadcrumbJsonLd({ locale, slug, title, categoryName }: { locale: string; slug: string; title: string; categoryName?: string }) {
    const baseUrl = getBaseUrl();
    const categoryPaths: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const itemListElement: any[] = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
        }
    ];

    if (categoryName) {
        itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": categoryName,
            "item": `${baseUrl}/${locale}/${categoryPaths[locale]}`
        });
        itemListElement.push({
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": `${baseUrl}/${locale}/${categoryPaths[locale]}/${slug}`
        });
    } else {
        itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": title,
            "item": `${baseUrl}/${locale}/${categoryPaths[locale]}/${slug}`
        });
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ArticleJsonLd({ dream }: { dream: DreamPost }) {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/${dream.lang}/yuxu-yozmalari/${dream.slug}`;
    const localizedImages: Record<string, string> = {
        az: 'yuxu_yozma.webp',
        tr: 'ruya_tabirleri.webp',
        en: 'dream_meanings.webp'
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": dream.seoTitle || dream.title,
        "description": dream.seoDescription || dream.excerpt,
        "image": {
            "@type": "ImageObject",
            "url": `${baseUrl}/${localizedImages[dream.lang] || 'yuxu_yozma.webp'}`,
            "caption": dream.title
        },
        "datePublished": dream.date,
        "dateModified": dream.date,
        "author": {
            "@type": "Person",
            "name": "Bond.az Expert",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": "Bond.az",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
    if (!faqs || faqs.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function VideoJsonLd({ dream }: { dream: DreamPost }) {
    if (!dream.video) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": dream.video.title,
        "description": dream.seoDescription || dream.excerpt,
        "thumbnailUrl": dream.video.thumbnailUrl,
        "uploadDate": dream.video.uploadDate,
        "contentUrl": dream.video.url,
        "embedUrl": dream.video.url
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ReviewJsonLd({ dream }: { dream: DreamPost }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": dream.title,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": dream.ratingValue || 4.9,
            "reviewCount": dream.reviewCount || 100,
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
export function RelatedDreamsJsonLd({ dreams, locale }: { dreams: DreamPost[], locale: string }) {
    if (!dreams || dreams.length === 0) return null;

    const baseUrl = getBaseUrl();
    const categoryPaths: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Related Dreams",
        "itemListElement": dreams.slice(0, 6).map((dream, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${baseUrl}/${locale}/${categoryPaths[locale]}/${dream.slug}`,
            "name": dream.title
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function ArchiveJsonLd({ dreams, locale, title, description, letter }: { dreams: DreamPost[], locale: string, title: string, description: string, letter?: string }) {
    const baseUrl = getBaseUrl();
    const categoryPaths: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const url = letter
        ? `${baseUrl}/${locale}/${categoryPaths[locale]}/${letter.toLowerCase()}`
        : `${baseUrl}/${locale}/${categoryPaths[locale]}`;

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": title,
        "description": description,
        "url": url,
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": dreams.length,
            "itemListElement": dreams.map((dream, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${baseUrl}/${locale}/${categoryPaths[locale]}/${dream.slug}`,
                "name": dream.title
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function BondHistoryJsonLd({ interactions }: { interactions: any[] }) {
    if (!interactions || interactions.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": interactions.map(item => ({
            "@type": "Question",
            "name": `User Dream Question: ${item.question}`,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function HomeJsonLd({ locale, dict }: { locale: string, dict: any }) {
    const baseUrl = getBaseUrl();

    const faqs: Record<string, any[]> = {
        az: [
            { q: "Yuxu yozması nədir?", a: "Yuxu yozması yuxularda görülən rəmzlərin, hadisələrin və hisslərin mənasını açmaq və onları insanın həyatı və ya psixoloji vəziyyəti ilə əlaqələndirmək prosesidir." },
            { q: "Bond AI necə işləyir?", a: "Bond AI süni intellekt əsaslı köməkçidir. Siz yuxunuzu təsvir edirsiniz və o, saniyələr içində sizə peşəkar, psixoloji və simvolik analiz təqdim edir." },
            { q: "Yuxular hər zaman gələcəkdən xəbər verir?", a: "Xeyr, yuxuların çoxu şüuraltı proseslərin, qorxuların və ya arzuların əksidir. Lakin bəzi yuxular mənəvi və ya xəbərdarlıq xarakteri daşıya bilər." }
        ],
        tr: [
            { q: "Rüya tabiri nedir?", a: "Rüya tabiri, rüyalarda görülen sembollerin, olayların ve hislerin anlamını çözmek ve bunları insanın hayatı veya psikolojik durumu ile ilişkilendirme sürecidir." },
            { q: "Bond AI nasıl çalışır?", a: "Bond AI, yapay zeka tabanlı bir asistandır. Rüyanızı tarif edersiniz ve o, saniyeler içinde size profesyonel, psikolojik ve sembolik analiz sunar." },
            { q: "Rüyalar her zaman gelecekten haber mi verir?", a: "Hayır, rüyaların çoğu bilinçaltı süreçlerin, korkuların veya arzuların yansımasıdır. Ancak bazı rüyalar manevi veya uyarıcı nitelikte olabilir." }
        ],
        en: [
            { q: "What is dream interpretation?", a: "Dream interpretation is the process of assigning meaning to dreams by symbols, events, and feelings, and relating them to a person's life or psychological state." },
            { q: "How does Bond AI work?", a: "Bond AI is an AI-powered assistant. You describe your dream, and it provides professional, psychological, and symbolic analysis within seconds." },
            { q: "Do dreams always predict the future?", a: "No, most dreams are reflections of subconscious processes, fears, or desires. However, some dreams can be spiritual or carry warnings." }
        ]
    };

    const currentFaqs = faqs[locale] || faqs.en;

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": `${baseUrl}/${locale}`,
            "name": "Bond.az",
            "alternateName": ["Dream Meanings", "Yuxu Yozmalari", "Ruya Tabirleri"],
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/${locale}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bond.az",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "sameAs": [
                "https://facebook.com/bond.az",
                "https://instagram.com/bond.az",
                "https://twitter.com/bond.az"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": currentFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        }
    ];

    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
