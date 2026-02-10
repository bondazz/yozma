'use client';

import React, { useEffect, useState } from 'react';
import { DreamPost } from '@/lib/dream-storage';
import { Locale } from '@/i18n/config';
import { Footer } from '@/components/sections/Footer';
import { BreadcrumbJsonLd, ArticleJsonLd, FAQJsonLd, VideoJsonLd, ReviewJsonLd, RelatedDreamsJsonLd } from '@/components/seo/JsonLd';
import { ChevronRight, BookOpen, Clock, Tag, MessageCircle, ShieldCheck, Share2, Sparkles, ArrowRight, PlusIcon, Twitter, Facebook, MessageSquare, Link2 } from 'lucide-react';
import { TableOfContents } from './TableOfContents';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';
import { BondAI } from './BondAI';
import { InContentAd } from '@/components/ui/InContentAd';

interface Props {
    dream: DreamPost;
    locale: Locale;
    relatedDreams: DreamPost[];
    dict: any;
    bondHistory?: any[];
}

export function DreamContentDisplay({ dream, locale, relatedDreams, dict, bondHistory }: Props) {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isHighlightHovered, setIsHighlightHovered] = useState(false);

    const categoryPaths: Record<string, string> = {
        az: 'yuxu-yozmalari',
        tr: 'ruya-tabirleri',
        en: 'dream-meaning'
    };

    // Split content for injections
    const contentParts = dream.content.split('</p>').map(p => p.trim()).filter(p => p.length > 0).map(p => p + '</p>');

    const firstParagraph = contentParts[0] || '';
    const secondParagraph = contentParts[1] || '';
    const remainingContent = contentParts.slice(2).join('');

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/20 relative overflow-hidden">

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Background Grid - Bento Style (Fades out into black) */}
            <div
                className={cn(
                    'pointer-events-none absolute top-0 left-0 right-0 h-[1000px] z-0',
                    'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]',
                    'bg-[size:32px_32px]',
                    '[mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]',
                )}
            />

            <BreadcrumbJsonLd locale={locale} slug={dream.slug} title={dream.title} categoryName={dict.common.title} />
            <ArticleJsonLd dream={dream} />
            <FAQJsonLd faqs={dream.faqs} />
            <VideoJsonLd dream={dream} />
            <ReviewJsonLd dream={dream} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
                <nav className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] mb-10 overflow-x-auto no-scrollbar whitespace-nowrap">
                    <Link href={`/${locale}`} className="text-gray-600 hover:text-white transition-all flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                        Home
                    </Link>
                    <ChevronRight size={8} className="text-gray-800 shrink-0" />
                    <Link href={`/${locale}/${categoryPaths[locale]}`} className="text-gray-600 hover:text-white transition-all">
                        {dict.common.title}
                    </Link>
                    <ChevronRight size={8} className="text-gray-800 shrink-0" />
                    <span className="text-white/40 truncate max-w-[200px]">{dream.title}</span>
                </nav>

                {/* Featured Image Section */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[21/9] relative group">
                    <img
                        src="https://raw.githubusercontent.com/bondazz/yozma/refs/heads/main/public/yuxu_yozma.webp"
                        alt={dream.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                    {/* Decorative Elements */}
                    <PlusIcon className="absolute -top-3 -left-3 size-6 text-white/20" />
                    <PlusIcon className="absolute -top-3 -right-3 size-6 text-white/20" />
                    <PlusIcon className="absolute -bottom-3 -left-3 size-6 text-white/20" />
                    <PlusIcon className="absolute -bottom-3 -right-3 size-6 text-white/20" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
                    {/* Left: Content */}
                    <div className="lg:col-span-8 relative">
                        {/* Floating Sticky Share Bar */}
                        <div className="hidden xl:block absolute -left-14 top-0 h-full">
                            <div className="sticky top-28 flex flex-col gap-1">
                                <button
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(dream.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="w-9 h-9 rounded bg-black border border-white/10 flex items-center justify-center group hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <Twitter size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                    className="w-9 h-9 rounded bg-black border border-white/10 flex items-center justify-center group hover:border-blue-600/50 transition-all duration-300"
                                >
                                    <Facebook size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                                </button>
                                <button
                                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(dream.title + ' ' + window.location.href)}`, '_blank')}
                                    className="w-9 h-9 rounded bg-black border border-white/10 flex items-center justify-center group hover:border-green-500/50 transition-all duration-300"
                                >
                                    <MessageSquare size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link kopyalandı!');
                                    }}
                                    className="w-9 h-9 rounded bg-black border border-white/10 flex items-center justify-center group hover:border-white/30 transition-all duration-300"
                                >
                                    <Link2 size={14} className="text-gray-600 group-hover:text-white transition-colors" />
                                </button>
                            </div>
                        </div>

                        <header className="mb-10">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                {/* Branded Category Badge */}
                                <div className="relative h-7 px-4 rounded-full bg-black/50 border border-white/5 overflow-hidden flex items-center justify-center group">
                                    <BorderTrail
                                        style={{
                                            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.6), #fff, rgba(59, 130, 246, 0.6), transparent)',
                                        }}
                                        size={40}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <div className="relative z-10 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">{dict.common.title}</span>
                                    </div>
                                </div>

                                {/* Fact Checked Badge */}
                                <div className="relative h-7 px-4 rounded-full bg-black/50 border border-white/5 overflow-hidden flex items-center justify-center group">
                                    <BorderTrail
                                        style={{
                                            background: 'linear-gradient(to right, transparent, rgba(34, 197, 94, 0.6), #fff, rgba(34, 197, 94, 0.6), transparent)',
                                        }}
                                        size={40}
                                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                    />
                                    <div className="relative z-10 flex items-center gap-2">
                                        <ShieldCheck size={11} className="text-green-500" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/80">{dict.dream.factChecked}</span>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-3xl font-black tracking-tight leading-[1.2] mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                                {dream.title}
                            </h1>

                            {/* Highlight Box / Snippet Definition */}
                            {dream.highlightBox && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onMouseEnter={() => setIsHighlightHovered(true)}
                                    onMouseLeave={() => setIsHighlightHovered(false)}
                                    className="p-5 md:p-6 rounded-xl bg-black border border-white/10 mb-10 relative overflow-hidden group"
                                >
                                    {isHighlightHovered && (
                                        <BorderTrail
                                            style={{
                                                boxShadow: '0px 0px 40px 20px rgb(255 255 255 / 40%), 0 0 80px 40px rgb(0 0 0 / 50%)',
                                            }}
                                            size={80}
                                        />
                                    )}
                                    <PlusIcon className="absolute -top-3 -left-3 size-5 text-white/10" />
                                    <PlusIcon className="absolute -bottom-3 -right-3 size-5 text-white/10" />

                                    <div className="relative z-10">
                                        <h4 className="text-[8px] font-mono uppercase tracking-[0.3em] text-blue-500/80 mb-2">{dict.dream.highlightTitle}</h4>
                                        <p className="text-sm md:text-base text-white/90 font-medium leading-[1.5] italic">
                                            "{dream.highlightBox}"
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            <div className="flex flex-wrap items-center gap-5 text-[8px] font-bold text-gray-600 uppercase tracking-[0.2em]">
                                <div className="flex items-center gap-1.5">
                                    <Clock size={10} className="text-gray-800" />
                                    <time dateTime={dream.date}>{new Date(dream.date).toLocaleDateString(locale, { dateStyle: 'long' })}</time>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <BookOpen size={10} className="text-gray-800" />
                                    <span>{Math.ceil(dream.content.length / 500)} {dict.dream.minRead}</span>
                                </div>
                            </div>
                        </header>

                        <div className="relative">
                            {/* Mobile Table of Contents - Before everything */}
                            <div className="lg:hidden">
                                <TableOfContents sticky={false} />
                            </div>

                            <article
                                className="dream-content-rich-text max-w-none text-gray-400 text-[15px] md:text-base leading-[1.7] 
                                    [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:scroll-mt-24
                                    [&_h3]:text-base [&_h3]:md:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:scroll-mt-24
                                    [&_p]:mb-5 [&_p]:opacity-90
                                    [&_strong]:text-white [&_strong]:font-semibold
                                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul]:space-y-3
                                    [&_li]:opacity-90
                                    [&_a]:text-blue-500 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-blue-500/20 [&_a]:hover:decoration-blue-500 transition-all
                                    [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:bg-white/[0.01] [&_table]:rounded-lg [&_table]:overflow-hidden
                                    [&_th]:bg-white/5 [&_th]:p-2.5 [&_th]:text-left [&_th]:text-[8px] [&_th]:uppercase [&_th]:tracking-widest [&_th]:text-gray-500 [&_th]:font-black
                                    [&_td]:p-2.5 [&_td]:border-b [&_td]:border-white/5 [&_td]:text-[13px] [&_td]:text-gray-400
                                    first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1"
                            >
                                <div dangerouslySetInnerHTML={{ __html: firstParagraph }} />
                                {contentParts.length > 0 && <InContentAd lang={locale} />}
                                <div dangerouslySetInnerHTML={{ __html: secondParagraph }} />

                                {/* In-content Related Articles (Topic Cluster) */}
                                {relatedDreams.length > 0 && (
                                    <div className="my-10 p-5 md:p-6 rounded-3xl bg-[#080808] border border-white/5 relative overflow-hidden group">
                                        <BorderTrail
                                            style={{
                                                background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.4), #fff, rgba(59, 130, 246, 0.4), transparent)',
                                            }}
                                            size={60}
                                            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                                        />

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse" />
                                                    <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500">
                                                        {dict.dream.topicCluster}
                                                    </h3>
                                                </div>
                                                <PlusIcon size={10} className="text-white/10 group-hover:text-blue-500/50 transition-colors" />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {relatedDreams.slice(0, 6).map((related) => (
                                                    <Link
                                                        key={related.slug}
                                                        href={`/${locale}/${categoryPaths[locale]}/${related.slug}`}
                                                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.03] transition-all group/item overflow-hidden"
                                                    >
                                                        <div className="w-7 h-7 rounded-lg bg-black border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-blue-500/50 transition-colors">
                                                            <ArrowRight size={10} className="text-gray-600 group-hover/item:text-blue-400 group-hover/item:translate-x-0.5 transition-all" />
                                                        </div>
                                                        <span className="text-[13px] font-bold text-gray-500 group-hover/item:text-white transition-colors line-clamp-1">
                                                            {related.title}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div dangerouslySetInnerHTML={{ __html: remainingContent }} />
                            </article>
                        </div>


                        {/* SEO Keywords Cloud / LSI Section */}
                        <section className="mt-12 pt-8 border-t border-white/5">
                            <h3 className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.3em] mb-5 flex items-center gap-2">
                                <Sparkles size={11} className="text-gray-800" />
                                {dict.dream.relatedConcepts}
                            </h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {dream.keywords.split(',').map((kw, i) => (
                                    <span key={i} className="text-[11px] font-bold text-gray-600 hover:text-blue-500 transition-all cursor-default">
                                        # {kw.trim()}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Section */}
                        {dream.faqs && (
                            <section className="mt-12 pt-8 border-t border-white/5">
                                <h2 className="text-base font-bold mb-5 tracking-tight">{dict.dream.expertAnswers}</h2>
                                <div className="space-y-1.5">
                                    {dream.faqs.map((faq, i) => (
                                        <div key={i} className="group border border-white/5 rounded-lg overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="w-full p-3.5 text-left flex items-center justify-between"
                                            >
                                                <span className="text-[13px] font-semibold text-white/70 group-hover:text-white transition-colors">{faq.question}</span>
                                                <motion.div
                                                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                                                    className="w-7 h-7 rounded flex items-center justify-center text-gray-600 border border-white/5"
                                                >
                                                    <ChevronRight size={12} />
                                                </motion.div>
                                            </button>
                                            <AnimatePresence>
                                                {openFaq === i && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                    >
                                                        <div className="p-3.5 pt-0 text-gray-400 leading-relaxed border-t border-white/5 text-[13px]">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Bond AI Section */}
                        <BondAI dict={dict} locale={locale} initialHistory={bondHistory} slug={dream.slug} />

                        {/* Similar Dreams Section (SSR for SEO) */}
                        {relatedDreams.length > 0 && (
                            <section className="mt-16 pt-10 border-t border-white/5">
                                <h2 className="text-sm font-black mb-8 tracking-tight flex items-center gap-3 italic">
                                    <Sparkles size={14} className="text-gray-700" />
                                    {dict.dream.topicCluster}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/10 relative overflow-hidden rounded-lg">
                                    {/* Small Plus Icons for corners */}
                                    <PlusIcon className="absolute -top-2.5 -left-2.5 size-5 text-white/20 z-20" />
                                    <PlusIcon className="absolute -top-2.5 -right-2.5 size-5 text-white/20 z-20" />
                                    <PlusIcon className="absolute -bottom-2.5 -left-2.5 size-5 text-white/20 z-20" />
                                    <PlusIcon className="absolute -bottom-2.5 -right-2.5 size-5 text-white/20 z-20" />

                                    {relatedDreams.slice(0, 3).map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/${locale}/${categoryPaths[locale]}/${related.slug}`}
                                            className="group relative bg-black p-5 flex flex-col justify-between transition-colors hover:bg-white/[0.04] cursor-pointer min-h-[180px] overflow-hidden"
                                        >
                                            <div className="relative z-10">
                                                <h4 className="text-[13px] font-black text-white/70 group-hover:text-white transition-all tracking-tight leading-tight mb-2 line-clamp-2">
                                                    {related.title}
                                                </h4>
                                                <p className="text-[10px] text-gray-600 line-clamp-3 leading-relaxed group-hover:text-gray-400 transition-colors">
                                                    {related.excerpt}
                                                </p>
                                            </div>

                                            <div className="mt-4 flex items-center justify-between relative z-10">
                                                <span className="text-[7px] font-black text-gray-700 uppercase tracking-widest group-hover:text-blue-500/50 transition-colors">
                                                    {dict.common.title}
                                                </span>
                                                <div className="flex items-center gap-1 text-[7px] font-black text-gray-800 uppercase tracking-widest group-hover:text-white transition-colors">
                                                    Read <ArrowRight size={8} className="group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>

                                            {/* Internal Grid Lines */}
                                            <div className="absolute top-0 right-0 h-full w-px bg-white/[0.05]" />
                                            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.05]" />
                                        </Link>
                                    ))}
                                </div>
                                <RelatedDreamsJsonLd dreams={relatedDreams} locale={locale} />
                            </section>
                        )}
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-4 hidden lg:block">
                        {/* Sticky Column */}
                        <div className="sticky top-24 space-y-10 pb-10">
                            <TableOfContents sticky={true} />

                            <div className="p-6 md:p-8 rounded-2xl bg-black border border-white/10 relative overflow-hidden group">
                                <PlusIcon className="absolute -top-3 -left-3 size-5.5 text-white/20" />
                                <PlusIcon className="absolute -top-3 -right-3 size-5.5 text-white/20" />
                                <PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-white/20" />
                                <PlusIcon className="absolute -bottom-3 -right-3 size-5.5 text-white/20" />

                                <h3 className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-2.5">
                                    <MessageCircle size={12} className="text-blue-600" />
                                    {dict.dream.topicCluster}
                                </h3>
                                <div className="space-y-3.5">
                                    {relatedDreams.slice(0, 4).map((related) => (
                                        <Link key={related.slug} href={`/${locale}/${categoryPaths[locale]}/${related.slug}`} className="group block">
                                            <h4 className="text-[13px] text-white/60 group-hover:text-white transition-all font-semibold mb-1 line-clamp-2">{related.title}</h4>
                                            <div className="flex items-center gap-1.5 text-[8px] text-gray-700 uppercase font-mono">
                                                <span>{related.category}</span>
                                                <ArrowRight size={7} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer dict={dict} lang={locale} />
        </main>
    );
}
