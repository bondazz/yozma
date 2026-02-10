import { getDreamBySlug, getAllDreams } from '@/lib/dream-storage';
import { notFound } from 'next/navigation';
import { DreamContentDisplay } from '@/components/sections/DreamContentDisplay';
import { generateDreamMetadata, generateArchiveMetadata } from '@/lib/metadata-helper';
import { Metadata } from 'next';
import { getDictionary } from '@/i18n/get-dictionary';
import React, { Suspense } from 'react';
import { DreamArchiveDisplay } from '@/components/sections/DreamArchiveDisplay';

export const revalidate = 3600; // Cache for 1 hour

export async function generateMetadata(
    props: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
    const params = await props.params;
    const { slug, locale } = params;

    if (slug.length === 1) {
        return generateArchiveMetadata(locale, slug);
    }

    return generateDreamMetadata(slug, locale);
}

export default async function Page(props: {
    params: Promise<{ locale: any; slug: string }>;
    searchParams: Promise<{ page?: string }>;
}) {
    const [params, searchParams] = await Promise.all([props.params, props.searchParams]);
    const { locale, slug } = params;
    const currentPage = parseInt(searchParams.page || '1');

    if (locale !== 'en') {
        notFound();
    }

    if (slug.length === 1) {
        const dreams = await getAllDreams(locale);
        const dict = await getDictionary(locale);
        const { getBondHistory } = await import('@/lib/bond-storage');
        const bondHistory = getBondHistory('archive');

        return (
            <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white font-black uppercase tracking-[0.3em]">Loading...</div>}>
                <DreamArchiveDisplay
                    dreams={dreams}
                    locale={locale}
                    dict={dict}
                    title={dict.dream.archiveTitle}
                    h1={dict.dream.archiveH1}
                    description={dict.dream.archiveDescription}
                    bondHistory={bondHistory}
                    initialLetter={slug}
                    currentPage={currentPage}
                />
            </Suspense>
        );
    }

    const [dream, dict, allDreams] = await Promise.all([
        getDreamBySlug(slug, locale),
        getDictionary(locale),
        getAllDreams(locale)
    ]);

    const { getBondHistory } = await import('@/lib/bond-storage');
    const bondHistory = getBondHistory(slug);

    if (!dream) {
        notFound();
    }

    const relatedDreams = allDreams
        .filter(d => d.slug !== slug && (dream.relatedSlugs?.includes(d.slug) || d.category === dream.category))
        .slice(0, 5);

    return <DreamContentDisplay dream={dream} locale={locale} relatedDreams={relatedDreams} dict={dict} bondHistory={bondHistory} />;
}
