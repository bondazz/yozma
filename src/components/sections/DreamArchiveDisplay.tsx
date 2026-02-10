'use client';

import React from 'react';
import { DreamPost } from '@/lib/dream-storage';
import { Locale } from '@/i18n/config';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, PlusIcon, Moon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';
import { ArchiveJsonLd } from '@/components/seo/JsonLd';
import { BondAI } from './BondAI';
import { useSearchParams, useRouter } from 'next/navigation';

interface Props {
    dreams: DreamPost[];
    locale: Locale;
    dict: any;
    title: string;
    h1: string;
    description: string;
    bondHistory?: any[];
    initialLetter?: string;
    currentPage?: number;
}

export function DreamArchiveDisplay({ dreams, locale, dict, title, h1, description, bondHistory, initialLetter, currentPage = 1 }: Props) {
    const router = useRouter();
    const selectedLetter = initialLetter?.toUpperCase() || null;

    // Client-side state for instant performance
    const [pageState, setPageState] = React.useState(currentPage);

    // Sync if props change (browser back/forward)
    React.useEffect(() => {
        setPageState(currentPage);
    }, [currentPage]);

    React.useEffect(() => {
        if (initialLetter) {
            const el = document.getElementById('archive-listing');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, [initialLetter]);

    const alphabets: Record<string, string[]> = {
        az: ['A', 'B', 'C', 'Ç', 'D', 'E', 'Ə', 'F', 'G', 'Ğ', 'H', 'X', 'I', 'İ', 'J', 'K', 'Q', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'],
        tr: ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'],
        en: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    };

    const currentAlphabet = alphabets[locale] || alphabets.en;

    const categoryPaths: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    const getSubjectFirstLetter = (title: string, locale: string) => {
        const t = title.trim().toUpperCase();
        if (locale === 'az' && t.startsWith('YUXUDA ')) {
            return t.replace('YUXUDA ', '').charAt(0);
        }
        if (locale === 'tr' && t.startsWith('RÜYADA ')) {
            return t.replace('RÜYADA ', '').charAt(0);
        }
        if (locale === 'en') {
            const subjects = t.replace('DREAM ABOUT ', '').replace('DREAMING OF ', '');
            return subjects.charAt(0);
        }
        return t.charAt(0);
    };

    const filteredDreams = selectedLetter
        ? dreams.filter(dream => getSubjectFirstLetter(dream.title, locale) === selectedLetter)
        : dreams;

    const ITEMS_PER_PAGE = 12;
    const totalPages = Math.ceil(filteredDreams.length / ITEMS_PER_PAGE);
    const paginatedDreams = filteredDreams.slice((pageState - 1) * ITEMS_PER_PAGE, pageState * ITEMS_PER_PAGE);

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/20 relative overflow-hidden">
            <ArchiveJsonLd dreams={dreams} locale={locale} title={title} description={description} letter={selectedLetter || undefined} />

            <div
                className={cn(
                    'pointer-events-none absolute top-0 left-0 right-0 h-[1000px] z-0',
                    'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]',
                    'bg-[size:32px_32px]',
                    '[mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]',
                )}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
                <nav className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-12">
                    <Link href={`/${locale}`} className="hover:text-white transition-all">{dict.common.home}</Link>
                    <ChevronRight size={10} />
                    <span className="text-gray-400">{title}</span>
                </nav>

                <header className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic">
                            {h1}
                        </h1>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed mx-auto max-w-2xl">
                            {description}
                        </p>
                    </motion.div>
                </header>

                <div className="mb-12 border-y border-white/5 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                        <button
                            onClick={() => router.push(`/${locale}/${categoryPaths[locale]}`)}
                            className={cn(
                                "px-3 py-1 text-[8px] font-black uppercase tracking-widest transition-all rounded-full border",
                                !selectedLetter
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                            )}
                        >
                            {locale === 'az' ? 'HAMISI' : locale === 'tr' ? 'HEPSİ' : 'ALL'}
                        </button>
                        {currentAlphabet.map((letter) => (
                            <button
                                key={letter}
                                onClick={() => router.push(`/${locale}/${categoryPaths[locale]}/${letter.toLowerCase()}`)}
                                className={cn(
                                    "w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[10px] font-black transition-all rounded-full border",
                                    selectedLetter === letter
                                        ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                        : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                                )}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    id="archive-listing"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 relative shadow-2xl overflow-hidden rounded-2xl"
                >
                    <PlusIcon className="absolute -top-3 -left-3 size-6 text-white/30 z-20" />
                    <PlusIcon className="absolute -top-3 -right-3 size-6 text-white/30 z-20" />
                    <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-white/30 z-20" />
                    <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-white/30 z-20" />

                    <AnimatePresence mode="popLayout">
                        {paginatedDreams.map((dream) => (
                            <motion.div
                                key={dream.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="h-full"
                            >
                                <GridCard
                                    dream={dream}
                                    locale={locale}
                                    categoryPath={categoryPaths[locale]}
                                    dict={dict}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex items-center justify-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                            const isCurrent = p === pageState;
                            return (
                                <button
                                    key={p}
                                    onClick={() => {
                                        setPageState(p);
                                        const baseUrl = `/${locale}/${categoryPaths[locale]}`;
                                        const letterPart = selectedLetter ? `/${selectedLetter.toLowerCase()}` : '';
                                        const queryPart = p > 1 ? `?page=${p}` : '';
                                        router.push(`${baseUrl}${letterPart}${queryPart}`, { scroll: false });
                                    }}
                                    className={cn(
                                        "w-10 h-10 flex items-center justify-center rounded-xl font-black text-[10px] transition-all border",
                                        isCurrent
                                            ? "bg-white text-black border-white shadow-2xl"
                                            : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                                    )}
                                >
                                    {p}
                                </button>
                            );
                        })}
                    </div>
                )}

                {filteredDreams.length === 0 && (
                    <div className="py-32 text-center border border-dashed border-white/10 rounded-2xl">
                        <Moon className="size-12 text-gray-800 mx-auto mb-6 animate-pulse" />
                        <p className="text-gray-500 uppercase font-black text-[10px] tracking-[0.3em]">
                            {locale === 'az' ? 'Yuxu tapılmadı.' : locale === 'tr' ? 'Rüya bulunamadı.' : 'No dreams found.'}
                        </p>
                    </div>
                )}

                <div className="mt-24">
                    <BondAI dict={dict} locale={locale} initialHistory={bondHistory} slug="archive" />
                </div>
            </div>

            <Footer dict={dict} lang={locale} />
        </main>
    );
}

function GridCard({ dream, locale, categoryPath, dict }: { dream: DreamPost; locale: string; categoryPath: string; dict: any }) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Link
            href={`/${locale}/${categoryPath}/${dream.slug}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-black p-8 flex flex-col justify-between transition-colors hover:bg-white/[0.04] cursor-pointer h-full min-h-[320px]"
        >
            {isHovered && (
                <BorderTrail
                    style={{
                        background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), #fff, rgba(59, 130, 246, 0.5), transparent)',
                    }}
                    size={80}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
            )}

            <div className="relative z-10 flex-1">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                    <Moon size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-lg font-black text-gray-300 group-hover:text-white transition-all tracking-tight leading-tight mb-3 line-clamp-2 min-h-[3.5rem]">
                    {dream.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {dream.excerpt}
                </p>
            </div>

            <div className="mt-8 flex items-center justify-between relative z-10">
                <span className="text-[9px] font-black text-gray-700 uppercase tracking-[0.2em] group-hover:text-blue-500/50 transition-colors">
                    {dict.common.title}
                </span>
                <div className="flex items-center gap-2 text-[9px] font-black text-gray-800 uppercase tracking-widest group-hover:text-white transition-colors">
                    {dict.common.start || 'Read'} <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            <div className="absolute top-0 right-0 h-full w-px bg-white/[0.05]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.05]" />
        </Link>
    );
}
