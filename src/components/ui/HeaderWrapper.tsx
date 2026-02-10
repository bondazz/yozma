'use client';

import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n/config';
import { Header } from '@/components/sections/Header';

export function HeaderWrapper({ dict, lang }: { dict: any, lang: Locale }) {
    const pathname = usePathname();
    const isAdmin = pathname.includes('/admin');

    if (isAdmin) return null;

    return <Header dict={dict} lang={lang} />;
}
