'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';

const alphabets: Record<string, string[]> = {
    az: 'ABCÇDEƏFGĞHXIİJKQLMNOÖPRSŞTUÜVYZ'.split(''),
    tr: 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'.split(''),
    en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
};

export const DreamCategories = ({ lang }: { lang: string }) => {
    const currentAlphabet = alphabets[lang] || alphabets.en;

    const badgeLabel: Record<string, string> = {
        az: 'Yuxu Yozmalar Arxiv',
        tr: 'Rüya Tabirleri Arşivi',
        en: 'Dream Meanings Archive'
    };

    const mainTitle: Record<string, string> = {
        az: 'Hərfə Görə Yuxu Yozmaları',
        tr: 'Harfe Göre Rüya Tabirleri',
        en: 'Search Dreams by Letter'
    };

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background Visual Grid (Kletka) */}
            <div
                className={cn(
                    'pointer-events-none absolute inset-0 size-full z-0',
                    'bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]',
                    'bg-[size:32px_32px]',
                    '[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent)]',
                )}
            />

            <div className="relative z-10 mx-auto w-full max-w-5xl px-4">
                {/* Heading matched to PopularDreams.tsx layout */}
                <header className="mb-12 text-center">
                    <div className="inline-block rounded-lg border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-600 mb-3">
                        {badgeLabel[lang] || badgeLabel.en}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic">
                        {mainTitle[lang] || mainTitle.en}
                    </h2>
                    <div className="sr-only">
                        {lang === 'az' ? 'Hər hansı bir hərfi seçərək yuxu yozmaları arxivimizdə axtarış edin.' :
                            lang === 'tr' ? 'Bir harf seçerek rüya tabirleri arşivimizde arama yapın.' :
                                'Browse our dream dictionary by selecting a letter.'}
                    </div>
                </header>

                <div className="flex flex-wrap justify-center gap-0 bg-black border border-white/5 relative mx-auto w-full">
                    {/* External Plus Icons */}
                    <PlusIcon className="absolute -top-3 -left-3 size-6 text-white/10" />
                    <PlusIcon className="absolute -top-3 -right-3 size-6 text-white/10" />
                    <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-white/10" />
                    <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-white/10" />

                    {currentAlphabet.map((letter, i) => (
                        <div key={letter} className="w-[16.66%] sm:w-[12.5%] md:w-[10%] lg:w-[8.33%] xl:w-[6.25%] aspect-square">
                            <AlphabetCard
                                letter={letter}
                                index={i}
                                onClick={() => {
                                    const categoryPaths: Record<string, string> = {
                                        az: 'yuxu-yozmalari',
                                        tr: 'ruya-tabirleri',
                                        en: 'dream-meaning'
                                    };
                                    const path = categoryPaths[lang] || categoryPaths.en;
                                    window.location.href = `/${lang}/${path}/${letter.toLowerCase()}`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AlphabetCard = ({ letter, index, onClick }: { letter: string; index: number; onClick: () => void }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.005 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className="group relative bg-[#050505] aspect-square flex flex-col items-center justify-center text-center transition-all hover:bg-white/[0.04] cursor-pointer overflow-hidden border-[0.5px] border-white/5"
        >
            {isHovered && (
                <BorderTrail
                    style={{
                        background: 'linear-gradient(to right, transparent, #fff, transparent)',
                    }}
                    size={25}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            )}

            <span className="text-[10px] md:text-xs font-black text-gray-600 group-hover:text-white transition-all duration-300">
                {letter}
            </span>
        </motion.div>
    );
};
