'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const InContentAd = ({ lang }: { lang: string }) => {
    const texts: any = {
        az: { label: "İş elanları və vakansiyalar", cta: "İndi Bax", site: "JOOBLE." },
        tr: { label: "İş ilanları ve açık pozisyonlar", cta: "Şimdi Bak", site: "JOOBLE." },
        en: { label: "Job vacancies and careers", cta: "View Now", site: "JOOBLE." }
    };
    const t = texts[lang] || texts.az;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-8 relative group"
        >
            {/* The Outer Glow Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/15 via-transparent to-blue-600/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <a
                href="https://jooble.az"
                target="_blank"
                rel="noopener"
                title={`${t.label} - ${t.site}`}
                className="relative block overflow-hidden rounded-xl md:rounded-2xl bg-black border border-white/10 hover:border-blue-500/40 transition-all duration-700 shadow-2xl !no-underline h-[60px] md:h-[70px]"
            >
                {/* Modern Background Patterns */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] rounded-full" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                <div className="flex items-center justify-between h-full px-5 md:px-8 relative z-10 gap-4">
                    <div className="flex items-center flex-1 min-w-0 h-full">
                        {/* Perfect Alignment for all text components */}
                        <div className="flex items-center gap-3 md:gap-5 h-full">
                            <h3 className="text-sm md:text-lg font-black text-white tracking-tight leading-none truncate flex items-center h-full relative -top-[1px]">
                                {t.label}
                            </h3>

                            {/* Visual Divider - Centered */}
                            <div className="h-5 w-[1.5px] bg-gradient-to-b from-blue-500/60 to-transparent rounded-full shrink-0 self-center" />

                            {/* Jooble Logo - Sized Up More and Centered */}
                            <span className="text-[16px] md:text-[22px] font-black text-white uppercase tracking-[0.1em] leading-none shrink-0 opacity-100 group-hover:text-blue-400 transition-colors flex items-center h-full">
                                {t.site}
                            </span>
                        </div>
                    </div>

                    {/* Creative CTA Button - Centered vertically */}
                    <div className="shrink-0 flex items-center h-full">
                        <div className="relative flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 pl-3 md:pl-5 pr-1.5 py-1 md:py-1.5 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:pl-7">
                            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] whitespace-nowrap leading-none">
                                {t.cta}
                            </span>
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-black group-hover:rotate-[360deg] shrink-0 shadow-lg shadow-blue-500/20">
                                <ExternalLink size={12} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Magnetic Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" />
            </a>
        </motion.div>
    );
};
