import { StaticPageContent } from '@/components/sections/StaticPageContent';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: `${dict.common.privacy} | Bond.az`,
        description: `${dict.common.privacy} - Bond.az istifadəçilərinin məlumatlarının qorunması siyasəti.`
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const contents: Record<Locale, string> = {
        az: `
            <h2>1. Məlumatların Toplanması</h2>
            <p>Sizin məxfiliyiniz bizim üçün önəmlidir. Saytdan istifadə zamanı IP ünvanınız və cihaz məlumatları toplanır.</p>
            <h2>2. Məlumatların İstifadəsi</h2>
            <p>Məlumatlar saytın funksionallığını və istifadəçi təcrübəsini təkmilləşdirmək üçün istifadə olunur.</p>
        `,
        tr: `
            <h2>1. Veri Toplama</h2>
            <p>Gizliliğiniz bizim için önemlidir. Site kullanımı sırasında IP adresiniz ve cihaz bilgileriniz toplanır.</p>
            <h2>2. Veri Kullanımı</h2>
            <p>Veriler sitenin işlevselliğini ve kullanıcı deneyimini iyileştirmek için kullanılır.</p>
        `,
        en: `
            <h2>1. Data Collection</h2>
            <p>Your privacy is important to us. We collect your IP address and device information during the use of our site.</p>
            <h2>2. Use of Data</h2>
            <p>Data is used to improve the functionality and user experience of the site.</p>
        `
    };

    return (
        <StaticPageContent
            title={dict.common.privacy}
            subtitle={locale === 'az' ? 'Məxfilik & Təhlükəsizlik' : locale === 'tr' ? 'Gizlilik ve Güvenlik' : 'Privacy & Security'}
            content={contents[locale]}
            locale={locale}
            dict={dict}
            breadcrumb={[{ label: dict.common.privacy }]}
            date="15 Jan, 2026"
        />
    );
}
