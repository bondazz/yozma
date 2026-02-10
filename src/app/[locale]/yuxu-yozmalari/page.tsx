import React, { Suspense } from 'react';
import { getAllDreams } from '@/lib/dream-storage';
import { getDictionary } from '@/i18n/get-dictionary';
import { DreamArchiveDisplay } from '@/components/sections/DreamArchiveDisplay';
import { generateArchiveMetadata } from '@/lib/metadata-helper';
import { Metadata } from 'next';
import { Locale } from '@/i18n/config';
import { redirect } from 'next/navigation';

export const revalidate = 3600; // Cache for 1 hour

export async function generateMetadata(
    props: { params: Promise<{ locale: string }>; searchParams: Promise<{ letter?: string; page?: string }> }
): Promise<Metadata> {
    const [params, searchParams] = await Promise.all([props.params, props.searchParams]);
    return generateArchiveMetadata(params.locale, searchParams.letter);
}

export default async function Page(props: { params: Promise<{ locale: string }>; searchParams: Promise<{ letter?: string; page?: string }> }) {
    const [params, searchParams] = await Promise.all([props.params, props.searchParams]);
    const locale = params.locale as Locale;
    const { letter, page } = searchParams;
    const currentPage = parseInt(page || '1');

    if (letter) {
        redirect(`/${locale}/yuxu-yozmalari/${letter.toLowerCase()}`);
    }

    if (locale !== 'az') {
        return <div>Not Found</div>;
    }

    const dreams = await getAllDreams(locale);
    const dict = await getDictionary(locale);
    const { getBondHistory } = await import('@/lib/bond-storage');
    const bondHistory = getBondHistory('archive');

    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white font-black uppercase tracking-[0.3em]">Yüklənir...</div>}>
            <DreamArchiveDisplay
                dreams={dreams}
                locale={locale}
                dict={dict}
                title={dict.dream.archiveTitle}
                h1={dict.dream.archiveH1}
                description={dict.dream.archiveDescription}
                bondHistory={bondHistory}
                currentPage={currentPage}
            />
        </Suspense>
    );
}
