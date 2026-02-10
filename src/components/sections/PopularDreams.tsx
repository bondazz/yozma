'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';
import Link from 'next/link';

interface PopularDreamsProps {
    title: string;
    dreams: any[];
    locale: string;
    categoryPaths: Record<string, string>;
}

export const PopularDreams = ({ title, dreams, locale, categoryPaths }: PopularDreamsProps) => {
    if (dreams.length === 0) return null;

    const trendingLabel: Record<string, string> = {
        az: 'Populyar Yozmalar',
        tr: 'Popüler Tabirler',
        en: 'Trending Interpretations'
    };

    const seoDescription: Record<string, string> = {
        az: 'İstifadəçilərimiz tərəfindən ən çox axtarılan və maraq doğuran yuxu yozmaları.',
        tr: 'Kullanıcılarımız tarafından en çok aranan ve merak edilen rüya tabirleri.',
        en: 'Most searched and trending dream interpretations by our users.'
    };

    return (
        <section className="relative py-24 overflow-hidden bg-black">
            {/* Background Grid */}
            <div
                className={cn(
                    'pointer-events-none absolute inset-0 size-full z-0',
                    'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]',
                    'bg-[size:48px_48px]',
                    '[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent)]',
                )}
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-block rounded-lg border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-gray-600 mb-3">
                        {trendingLabel[locale] || trendingLabel.en}
                    </div>
                    <Link href={`/${locale}/${categoryPaths[locale]}`} className="inline-block group">
                        <h2 className="text-2xl md:text-4xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent italic">
                            {title}
                        </h2>
                    </Link>
                    {/* SEO Descriptive Text (Hidden/Low contrast) */}
                    <p className="mt-4 text-[10px] text-gray-700 font-medium max-w-md mx-auto uppercase tracking-wider">
                        {seoDescription[locale] || seoDescription.en}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 relative shadow-2xl overflow-hidden rounded-xl">
                    {/* External Plus Icons */}
                    <PlusIcon className="absolute -top-3 -left-3 size-6 text-white/30 z-20" />
                    <PlusIcon className="absolute -top-3 -right-3 size-6 text-white/30 z-20" />
                    <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-white/30 z-20" />
                    <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-white/30 z-20" />

                    {dreams.map((dream, i) => (
                        <DreamCard
                            key={dream.slug}
                            dream={dream}
                            index={i}
                            locale={locale}
                            categoryPaths={categoryPaths}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const DreamCard = ({ dream, index, locale, categoryPaths }: { dream: any; index: number; locale: string; categoryPaths: any }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Link
            href={`/${locale}/${categoryPaths[locale]}/${dream.slug}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-black p-8 flex flex-col justify-between transition-colors hover:bg-white/[0.04] cursor-pointer min-h-[280px]"
        >
            {isHovered && (
                <BorderTrail
                    style={{
                        background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), #fff, rgba(59, 130, 246, 0.5), transparent)',
                    }}
                    size={80}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            )}

            <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                    <Moon size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>

                <h3 className="text-base font-black text-gray-300 group-hover:text-white transition-all tracking-tight leading-tight mb-3">
                    {dream.title}
                </h3>

                <p className="text-[11px] text-gray-600 line-clamp-3 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {dream.excerpt}
                </p>
            </div>

            <div className="mt-6 flex items-center justify-between relative z-10">
                <span className="text-[8px] font-black text-gray-700 uppercase tracking-[0.2em] group-hover:text-blue-500/50 transition-colors">
                    {dream.category}
                </span>
                <div className="flex items-center gap-1.5 text-[8px] font-black text-gray-800 uppercase tracking-widest group-hover:text-white transition-colors">
                    {locale === 'az' ? 'Oxu' : locale === 'tr' ? 'Oku' : 'Read'} <PlusIcon size={10} />
                </div>
            </div>

            <div className="absolute top-0 right-0 h-full w-px bg-white/[0.05]" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.05]" />
        </Link>
    );
};
