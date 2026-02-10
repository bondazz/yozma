import { StaticPageContent } from '@/components/sections/StaticPageContent';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: `${dict.common.terms} | Bond.az`,
        description: `${dict.common.terms} - Bond.az yuxu yozmaları platformasının istifadə qaydaları.`
    };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const contents: Record<Locale, string> = {
        az: `
            <h2>1. Giriş</h2>
            <p>Bond.az yuxu yozmaları platformasına xoş gəlmisiniz. Bu internet saytını istifadə etməklə siz aşağıdakı şərtləri tam şəkildə qəbul etmiş hesab olunursunuz.</p>
            <h2>2. Əqli Mülkiyyət</h2>
            <p>Bond.az saytında yerləşdirilmiş bütün mətnlər və dizayn Bond.az-ın əqli mülkiyyətidir.</p>
            <h2>3. Məsuliyyət</h2>
            <p>Yuxuların yozumu subyektivdir və elmi sübutlara əsaslanmaya bilər.</p>
        `,
        tr: `
            <h2>1. Giriş</h2>
            <p>Bond.az rüya tabirleri platformasına hoş geldiniz. Bu internet sitesini kullanarak aşağıdaki şartları tamamen kabul etmiş sayılırsınız.</p>
            <h2>2. Fikri Mülkiyet</h2>
            <p>Bond.az sitesinde yer alan tüm metinler ve tasarım Bond.az'ın fikri mülkiyetidir.</p>
            <h2>3. Sorumluluk</h2>
            <p>Rüya tabirleri sübjektiftir ve bilimsel kanıtlara dayanmayabilir.</p>
        `,
        en: `
            <h2>1. Introduction</h2>
            <p>Welcome to Bond.az dream interpretation platform. By using this website, you fully accept these terms and conditions.</p>
            <h2>2. Intellectual Property</h2>
            <p>All content and design on Bond.az are the intellectual property of Bond.az.</p>
            <h2>3. Disclaimer</h2>
            <p>Dream interpretations are subjective and may not be based on scientific evidence.</p>
        `
    };

    return (
        <StaticPageContent
            title={dict.common.terms}
            subtitle={locale === 'az' ? 'Hüquqi Sənədlər' : locale === 'tr' ? 'Yasal Belgeler' : 'Legal Documents'}
            content={contents[locale]}
            locale={locale}
            dict={dict}
            breadcrumb={[{ label: dict.common.terms }]}
            date="15 Jan, 2026"
        />
    );
}
