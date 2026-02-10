import { HeroSection } from '@/components/sections/HeroSection';
import { DreamCategories } from '@/components/sections/DreamCategories';
import { PopularDreams } from '@/components/sections/PopularDreams';
import { Footer } from '@/components/sections/Footer';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { getAllDreams, getRandomDreams } from '@/lib/dream-storage';
import { generateHomeMetadata } from '@/lib/metadata-helper';
import { HomeJsonLd } from '@/components/seo/JsonLd';
import { Metadata } from 'next';

import { AdBanner } from '@/components/ui/AdBanner';

export const revalidate = 0; // Ensure fresh random data on every refresh

export async function generateMetadata(
    props: { params: Promise<{ locale: Locale }> }
): Promise<Metadata> {
    const params = await props.params;
    return generateHomeMetadata(params.locale);
}

export default async function Home(
    props: {
        params: Promise<{ locale: Locale }>;
    }
) {
    const params = await props.params;
    const { locale } = params;
    const dict = await getDictionary(locale);
    const dreams = await getRandomDreams(locale, 12);

    const categoryPaths: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    return (
        <main className="min-h-screen selections:bg-blue-500/30">
            <HomeJsonLd locale={locale} dict={dict} />
            <HeroSection dict={dict} lang={locale} />

            <DreamCategories lang={locale} />

            <AdBanner lang={locale} />

            <PopularDreams
                title={dict.common.popularDreams}
                dreams={dreams}
                locale={locale}
                categoryPaths={categoryPaths}
            />

            <Footer dict={dict} lang={locale} />
        </main>
    );
}
