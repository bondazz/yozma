import { StaticPageContent } from '@/components/sections/StaticPageContent';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: `${dict.common.legalNotice} | Bond.az`,
        description: `${dict.common.legalNotice} - Bond.az yuxu yozmaları platformasının hüquqi bildirişi.`
    };
}

export default async function LegalNoticePage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const content = `
        <h2>Rəsmi Bildiriş</h2>
        <p>Bond.az saytı müstəqil yuxu yozma platforması olaraq fəaliyyət göstərir. Saytın məqsədi istifadəçilərə yuxu analizi və psixoloji fərziyyələr təqdim etməkdir.</p>

        <h2>Məsuliyyət</h2>
        <p>Təqdim olunan yozmalar heç bir halda tibbi diaqnoz, hüquqi məsləhət və ya dəqiq proqnoz kimi xidmət etmir. İstifadəçilərin saytdakı məlumatlara əsasən qəbul etdiyi qərarlara görə Bond.az məsuliyyət daşımır.</p>

        <h2>Müəllif Hüquqları</h2>
        <p>Bond.az brendi və saytdakı bütün orijinal məzmunlar qorunur. İcazəsiz istifadə qanunvericiliklə müəyyən edilmiş qaydada hüquqi məsuliyyət yarada bilər.</p>

        <h2>Ünvan</h2>
        <p>Bakı şəhəri, Azərbaycan. <br/> Əlaqə: info@bond.az</p>
    `;

    return (
        <StaticPageContent
            title={dict.common.legalNotice}
            subtitle="Hüquqi Məlumat"
            content={content}
            locale={locale}
            dict={dict}
            breadcrumb={[{ label: dict.common.legalNotice }]}
            date="15 Yanvar, 2026"
        />
    );
}
