import { StaticPageContent } from '@/components/sections/StaticPageContent';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: `${dict.common.helpCenter} | Bond.az`,
        description: `${dict.common.helpCenter} - Bond.az platformasından istifadə zamanı yaranan sualların cavabları.`
    };
}

export default async function HelpCenterPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const content = `
        <h2>Tez-tez Verilən Suallar</h2>
        
        <h3>Yuxu yozmasını necə tapa bilərəm?</h3>
        <p>Ana səhifədəki axtarış bölməsinə yuxunuzda gördüyünüz əsas predmeti (məsələn: "Maşın" və ya "Su") yazaraq axtar düyməsini sıxın. Həmçinin Kateqoriyalar bölməsindən mövzuya uyğun qruplara baxa bilərsiniz.</p>

        <h3>Bond AI nədir?</h3>
        <p>Bond AI yuxularınızı saniyələr içində analiz edən süni intellekt əsaslı köməkçidir. O, yuxunuzun detallarını nəzərə alaraq sizə fərdi yozma təqdim edir.</p>

        <h3>Məqalələriniz nə dərəcədə dəqiqdir?</h3>
        <p>Məqalələrimiz həm psixoloji analizlər, həm də klassik mənəvi yozma mənbələri əsasında peşəkar komandamız tərəfindən hazırlanır.</p>

        <h3>Sualım var, necə əlaqə saxlayım?</h3>
        <p>Bizimlə Əlaqə səhifəsi vasitəsilə və ya sosial media hesablarımızdan bizə yaza bilərsiniz. Komandamız ən qısa zamanda sizə cavab verəcəkdir.</p>
    `;

    return (
        <StaticPageContent
            title={dict.common.helpCenter}
            subtitle="Dəstək & Yardım"
            content={content}
            locale={locale}
            dict={dict}
            breadcrumb={[{ label: dict.common.helpCenter }]}
            date="15 Yanvar, 2026"
        />
    );
}
