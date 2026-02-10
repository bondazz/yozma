import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Locale, locales } from '@/i18n/config';

import { getDictionary } from '@/i18n/get-dictionary';
import { Header } from '@/components/sections/Header';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

import { HeaderWrapper } from '@/components/ui/HeaderWrapper';

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(
    props: {
        children: React.ReactNode;
        params: Promise<{ locale: string }>;
    }
) {
    const params = await props.params;
    const locale = params.locale as Locale;
    const { children } = props;
    const dict = await getDictionary(locale);

    return (
        <html lang={locale} className="dark">
            <head>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                var hue = localStorage.getItem('lightning-hue') || '220';
                                document.documentElement.style.setProperty('--lightning-hue', hue);
                            } catch (e) {}
                        })();
                    `
                }} />
            </head>
            <body className={`${inter.className} bg-black text-white antialiased`}>
                <ScrollToTop />
                <HeaderWrapper dict={dict} lang={locale} />
                {children}
            </body>
        </html>
    );
}
