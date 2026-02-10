import { StaticPageContent } from '@/components/sections/StaticPageContent';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/config';
import { Metadata } from 'next';
import { Mail, MessageSquare, Instagram, Twitter } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    return {
        title: `${dict.common.contact} | Bond.az`,
        description: `${dict.common.contact} - Bizimlə əlaqə saxlayın. Sual, təklif və əməkdaşlıq üçün bizə yazın.`
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    const content = `
        <h2>Bizimlə Əlaqə Saxlayın</h2>
        <p>Sualınız, təklifiniz və ya hər hansı bir əməkdaşlıq müraciətiniz varsa, bizimlə aşağıdakı kanallar vasitəsilə əlaqə saxlaya bilərsiniz. Komandamız həftə içi 24 saat ərzində sizə geri dönüş edəcəkdir.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div class="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
                <div class="p-4 rounded-2xl bg-blue-500/10 text-blue-500 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h4 class="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">E-poçt</h4>
                <p class="text-sm font-medium text-gray-400">info@bond.az</p>
            </div>
            <div class="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center">
                <div class="p-4 rounded-2xl bg-purple-500/10 text-purple-500 mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <h4 class="font-bold text-white mb-2 uppercase tracking-widest text-[10px]">Dəstək</h4>
                <p class="text-sm font-medium text-gray-400">@bond_az (Instagram)</p>
            </div>
        </div>

        <h2>Əlaqə Formu</h2>
        <p>Aşağıdakı formu dolduraraq da müraciətinizi bizə ünvanlaya bilərsiniz. Bond AI ilə bağlı problemlərinizi bildirmək üçün lütfən sistem daxili "Support" düyməsindən istifadə edin.</p>
    `;

    return (
        <StaticPageContent
            title={dict.common.contact}
            subtitle="Əlaqə & Dəstək"
            content={content}
            locale={locale}
            dict={dict}
            breadcrumb={[{ label: dict.common.contact }]}
            date="15 Yanvar, 2026"
        />
    );
}
