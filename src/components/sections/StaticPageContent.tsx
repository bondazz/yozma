'use client';

import React from 'react';
import { Locale } from '@/i18n/config';
import { Footer } from '@/components/sections/Footer';
import { ChevronRight, Clock, ShieldCheck, Share2, PlusIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TableOfContents } from './TableOfContents';

interface Props {
    title: string;
    subtitle?: string;
    content: string;
    locale: Locale;
    dict: any;
    breadcrumb: { label: string; href?: string }[];
    date?: string;
}

export function StaticPageContent({ title, subtitle, content, locale, dict, breadcrumb, date }: Props) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/20 relative overflow-hidden">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Background Grid */}
            <div
                className={cn(
                    'pointer-events-none absolute top-0 left-0 right-0 h-[1000px] z-0',
                    'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]',
                    'bg-[size:32px_32px]',
                    '[mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]',
                )}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
                <nav className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] mb-10 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <Link href={`/${locale}`} className="text-gray-600 hover:text-white transition-all flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        {dict.common.home}
                    </Link>
                    {breadcrumb.map((item, i) => (
                        <React.Fragment key={i}>
                            <ChevronRight size={8} className="text-gray-800 shrink-0" />
                            {item.href ? (
                                <Link href={item.href} className="text-gray-600 hover:text-white transition-all">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white/40">{item.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8">
                        <header className="mb-12">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                <div className="px-4 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">{subtitle || dict.common.application}</span>
                                </div>
                                <div className="px-4 py-1 rounded-full bg-green-500/5 border border-green-500/10 flex items-center gap-2">
                                    <ShieldCheck size={11} className="text-green-500" />
                                    <span className="text-[9px] font-black uppercase tracking-widest text-green-400">
                                        {locale === 'az' ? 'Verifikasiya olunub' : locale === 'tr' ? 'Doğrulanmış' : 'Verified'}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                                {title}
                            </h1>

                            {date && (
                                <div className="flex items-center gap-2 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                                    <Clock size={12} />
                                    <span>{locale === 'az' ? 'Son yenilənmə' : locale === 'tr' ? 'Son güncelleme' : 'Last updated'}: {date}</span>
                                </div>
                            )}
                        </header>

                        <article
                            className="dream-content-rich-text max-w-none text-gray-400 text-base leading-[1.8] 
                                [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:tracking-tight
                                [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-10 [&_h3]:mb-4
                                [&_p]:mb-6 [&_p]:opacity-90
                                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-6 [&_ul]:space-y-3
                                [&_li]:opacity-90
                                [&_strong]:text-white [&_strong]:font-semibold
                                first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>

                    <div className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-10">
                            <TableOfContents sticky={true} />

                            <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                                <PlusIcon className="absolute -top-3 -left-3 size-6 text-white/10" />
                                <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-white/10" />

                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6 flex items-center gap-2">
                                    <Sparkles size={14} />
                                    {dict.common.support}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                                    {locale === 'az'
                                        ? 'Hər hansı bir sualınız və ya təklifiniz varsa, bizimlə əlaqə saxlamaqdan çəkinməyin.'
                                        : locale === 'tr'
                                            ? 'Herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin.'
                                            : 'If you have any questions or suggestions, please feel free to contact us.'}
                                </p>
                                <Link
                                    href={`/${locale}/contact`}
                                    className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-widest text-center block transition-all"
                                >
                                    {dict.common.contact}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer dict={dict} lang={locale} />
        </main>
    );
}
