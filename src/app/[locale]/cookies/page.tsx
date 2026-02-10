import { StaticPageContent } from '@/components/sections/StaticPageContent';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: `${dict.common.cookies} | Bond.az`,
        description: `${dict.common.cookies} - Bond.az saytında kuki texnologiyasından istifadə qaydaları.`
    };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const content = `
        <h2>1. Kuki (Cookie) nədir?</h2>
        <p>Kuki, saytımızı ziyarət etdiyiniz zaman cihazınızda (kompüter, mobil telefon və ya planşet) saxlanılan kiçik mətn fayllarıdır. Onlar saytın sizi tanımasına və seçimlərinizi yadda saxlamasına kömək edir.</p>

        <h2>2. Biz hansı kukilərdən istifadə edirik?</h2>
        <ul>
            <li><strong>Zəruri kukilər:</strong> Saytın əsas funksiyalarının (məsələn, naviqasiya) işləməsi üçün mütləqdir.</li>
            <li><strong>Analitik kukilər:</strong> Ziyarətçilərin saytdan necə istifadə etdiyini anlamaq və performansı artırmaq üçün istifadə olunur (məsələn, ən çox oxunan yuxu yozmaları).</li>
            <li><strong>Funksional kukilər:</strong> Sizin seçimlərinizi (məsələn, seçdiyiniz dil və ya ildırım rəngi) yadda saxlamağa imkan verir.</li>
        </ul>

        <h2>3. Kukiləri necə idarə etmək olar?</h2>
        <p>Əksər brauzerlər kukiləri avtomatik qəbul edir. Lakin siz brauzer tənzimləmələrinizdən kukiləri rədd edə və ya silə bilərsiniz. Nəzərə alın ki, kukiləri söndürmək saytın bəzi funksiyalarının düzgün işləməməsinə səbəb ola bilər.</p>

        <h2>4. Üçüncü tərəf kukiləri</h2>
        <p>Biz Google Analytics kimi üçüncü tərəf xidmətlərindən istifadə edirik ki, bu xidmətlər də öz kukilərini yerləşdirə bilər.</p>
    `;

    return (
        <StaticPageContent
            title={dict.common.cookies}
            subtitle="Texnoloji Siyasət"
            content={content}
            locale={locale}
            dict={dict}
            breadcrumb={[{ label: dict.common.cookies }]}
            date="15 Yanvar, 2026"
        />
    );
}
