'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BorderTrail } from '@/components/ui/border-trail';

export const AdBanner = ({ className = "", lang = "az" }: { className?: string; lang?: string }) => {
    const dicts: Record<string, any> = {
        az: {
            title: "Azərbaycanda bütün iş elanları",
            subtitle: "Minlərlə yeni vakansiya",
            cta: "İndi Tap",
            seo: "Jooble.az iş axtarış portalı vasitəsilə Azərbaycandakı ən son vakansiyalar, iş elanları və karyera imkanları."
        },
        tr: {
            title: "Azerbaycan'daki tüm iş ilanları",
            subtitle: "Binlerce yeni iş fırsatı",
            cta: "Hemen Bul",
            seo: "Jooble.az iş arama portalı aracılığıyla Azerbaycan'daki en güncel iş ilanları ve kariyer fırsatlarını keşfedin."
        },
        en: {
            title: "All job vacancies in Azerbaijan",
            subtitle: "Thousands of new opportunities",
            cta: "Find Now",
            seo: "Explore the latest job vacancies and career opportunities in Azerbaijan via the Jooble.az job search portal."
        }
    };

    const dict = dicts[lang] || dicts.az;

    return (
        <section className={`w-full overflow-hidden py-6 sm:py-10 ${className}`}>
            <div className="mx-auto max-w-7xl px-4">
                <motion.a
                    href="https://jooble.az"
                    target="_blank"
                    rel="noopener"
                    title={`Jooble.az - ${dict.title}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.002 }}
                    viewport={{ once: true }}
                    className="relative block w-full rounded-2xl md:rounded-[32px] bg-white overflow-hidden shadow-2xl group cursor-pointer"
                >
                    {/* Background Layer */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white" />

                        {/* Lightning Cut - Simplified and hidden on Small Mobile to prevent layout issues */}
                        <div
                            className="absolute right-0 top-0 h-full w-[40%] bg-black hidden sm:block"
                            style={{
                                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 75%, 0% 50%, 10% 25%)'
                            }}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse" />
                        </div>
                    </div>

                    {/* Main Content Grid-like Flexbox */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:px-12 md:py-0 md:h-[120px]">

                        {/* Info Section */}
                        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 w-full md:w-auto text-center md:text-left">
                            {/* Jooble Logo */}
                            <div className="flex items-center shrink-0">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tighter">Jooble</span>
                                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black">.</span>
                            </div>

                            <div className="hidden md:block h-10 w-px bg-black/5" />

                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-sm sm:text-base md:text-xl font-black text-gray-900 leading-tight tracking-tight">
                                    {dict.title}
                                </h2>
                                <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                                    {dict.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="relative group/btn w-full md:w-auto flex justify-center">
                            <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity" />

                            <div className="relative flex items-center justify-between md:justify-start gap-4 bg-white text-black pl-6 pr-2 py-2 rounded-full border border-black/5 shadow-xl transition-all duration-300 group-hover/btn:bg-blue-600 group-hover/btn:text-white md:min-w-[160px]">
                                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">{dict.cta}</span>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-500 group-hover/btn:bg-white group-hover/btn:text-black group-hover/btn:rotate-45 shrink-0">
                                    <ArrowRight size={16} />
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -4, 0], opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-2 -right-1 text-blue-500 pointer-events-none hidden sm:block"
                            >
                                <Sparkles size={14} fill="currentColor" />
                            </motion.div>
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="sr-only">
                        {dict.seo}
                    </div>

                    <BorderTrail
                        style={{
                            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.4), #000, transparent)',
                        }}
                        size={100}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.a>
            </div>
        </section>
    );
};
