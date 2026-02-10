'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale } from '@/i18n/config';
import { Logo } from '@/components/ui/Logo';

export const Header = ({ dict, lang }: { dict: any; lang: Locale }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const slugMap: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const menuItems = [
        { key: 'title', href: `/${lang}/${slugMap[lang] || 'yuxu-yozmalari'}` },
        { key: 'contact', href: `/${lang}/contact` }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 py-6"
            >
                <div className="max-w-7xl mx-auto backdrop-blur-3xl bg-white/5 border border-white/10 rounded-full h-14 sm:h-16 px-4 sm:px-8 flex justify-between items-center relative z-50">
                    {/* Logo Section */}
                    <Link href={`/${lang}`} className="flex items-center group shrink-0" aria-label={`${dict.common.home} - Bond.az`}>
                        <Logo lang={lang} className="h-8 sm:h-12" variant="full" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/5"
                            >
                                {dict.common[item.key]}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10" aria-label="Change language">
                            {['az', 'tr', 'en'].map((l) => (
                                <Link
                                    key={l}
                                    href={`/${l}`}
                                    aria-label={`Switch to ${l === 'az' ? 'Azerbaijani' : l === 'tr' ? 'Turkish' : 'English'}`}
                                    className={`text-[9px] sm:text-[10px] uppercase font-bold transition-colors ${lang === l ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
                    >
                        <button
                            className="absolute top-8 right-8 p-3 bg-white/5 rounded-full border border-white/10 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col space-y-8 text-center">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className="text-3xl font-black uppercase tracking-tighter text-gray-400 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {dict.common[item.key]}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
