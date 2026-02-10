'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import Link from 'next/link';
import { Locale } from '@/i18n/config';

export const Footer = ({ dict, lang }: { dict: any; lang: string }) => {
    return (
        <footer className="py-24 bg-black border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6">
                            <Link href={`/${lang}`} aria-label={`${dict.common.home} - Bond.az`}>
                                <Logo lang={lang} className="h-14" variant="full" />
                            </Link>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {dict.common.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 italic tracking-tight">{dict.common.quickLinks}</h4>
                        <nav aria-label="Quick links">
                            <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-gray-500">
                                <li><Link href={`/${lang}`} className="hover:text-white transition-colors py-1 inline-block">{dict.common.home}</Link></li>
                                <li>
                                    <Link
                                        href={`/${lang}/${lang === 'az' ? 'yuxu-yozmalari' : lang === 'tr' ? 'ruya-tabirleri' : 'dream-meaning'}`}
                                        className="hover:text-white transition-colors py-1 inline-block"
                                    >
                                        {dict.dream.archiveTitle} (A-Z)
                                    </Link>
                                </li>
                                <li><Link href={`/${lang}/contact`} className="hover:text-white transition-colors py-1 inline-block">{dict.common.contact}</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 italic tracking-tight">{dict.common.support}</h4>
                        <nav aria-label="Support links">
                            <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-gray-500">
                                {[
                                    { href: `/${lang}/help-center`, label: dict.common.helpCenter },
                                    { href: `/${lang}/terms`, label: dict.common.terms },
                                    { href: `/${lang}/privacy`, label: dict.common.privacy },
                                    { href: `/${lang}/cookies`, label: dict.common.cookies },
                                    { href: `/${lang}/legal-notice`, label: dict.common.legalNotice }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="hover:text-white transition-colors py-1 inline-block">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-gray-600 text-[10px] leading-relaxed text-center md:text-left max-w-2xl font-medium">
                        © {new Date().getFullYear()} Bond.az. {dict.common.allRightsReserved}.
                    </div>
                    <div className="flex gap-6 shrink-0" aria-label="Social media">
                        {['Instagram', 'Twitter', 'Telegram'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gray-600 hover:text-white transition-colors text-[10px] font-black cursor-pointer uppercase tracking-widest py-2"
                                aria-label={social}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
