'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MessageSquare, Send, User, ShieldCheck, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BorderTrail } from '@/components/ui/border-trail';

import { BondHistoryJsonLd } from '@/components/seo/JsonLd';

interface Interaction {
    id: string;
    userName: string;
    userSurname: string;
    question: string;
    answer: string;
    timestamp: number;
}

interface BondAiProps {
    dict: any;
    locale: string;
    slug: string;
    initialHistory?: Interaction[];
}

export function BondAI({ dict, locale, slug, initialHistory = [] }: BondAiProps) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dream, setDream] = useState('');
    const [history, setHistory] = useState<Interaction[]>(initialHistory);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Persistence
    useEffect(() => {
        // We now rely more on server-side initialHistory + API updates
        // but can keep local for a smoother session-only feel if needed.
        // For now, let's trust server data for SEO content.
    }, []);

    const saveInteraction = (interaction: Interaction) => {
        const newHistory = [interaction, ...history];
        setHistory(newHistory);
        // localStorage.setItem('bond_ai_history', JSON.stringify(newHistory)); // Disable local sync to prevent global leaks
    };

    const handleSubit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!name || !surname || !dream) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/bond-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dream, locale, slug, name, surname })
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.error === 'ONLY_DREAMS') {
                    setError(dict.dream.bondAiError);
                } else {
                    setError('Service Error. Please try again.');
                }
                setIsLoading(false);
                return;
            }

            const newInteraction: Interaction = {
                id: Math.random().toString(36).substr(2, 9),
                userName: name,
                userSurname: surname,
                question: dream,
                answer: data.answer,
                timestamp: Date.now()
            };

            saveInteraction(newInteraction);
            setDream('');
        } catch (err) {
            console.error(err);
            setError('Network error. Check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="mt-20 pt-12 border-t border-white/5">
            <BondHistoryJsonLd interactions={history} />
            <div className="max-w-3xl mx-auto">
                {/* Header with Glowing Icon */}
                <div className="flex items-start gap-4 mb-8">
                    <div className="relative w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden group">
                        <BorderTrail
                            style={{
                                background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.8), #fff, rgba(59, 130, 246, 0.8), transparent)',
                            }}
                            size={40}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                        <Sparkles size={24} className="text-blue-500 relative z-10 animate-pulse" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {dict.dream.bondAiTitle}
                        </h2>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed mt-1">
                            {dict.dream.bondAiDescription}
                        </p>
                    </div>
                </div>

                {/* Question Form with Border Trail */}
                <div className="relative group p-[1px] rounded-3xl overflow-hidden mb-12">
                    <BorderTrail
                        style={{
                            background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.4), rgba(255, 255, 255, 0.3), rgba(59, 130, 246, 0.4), transparent)',
                        }}
                        size={120}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    />

                    <form onSubmit={handleSubit} className="relative z-10 bg-[#080808] border border-white/5 rounded-[calc(1.5rem-1px)] p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="relative">
                                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                                <input
                                    type="text"
                                    placeholder={dict.dream.bondAiName}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-700"
                                />
                            </div>
                            <div className="relative">
                                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                                <input
                                    type="text"
                                    placeholder={dict.dream.bondAiSurname}
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-700"
                                />
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <textarea
                                placeholder={dict.dream.bondAiPlaceholder}
                                value={dream}
                                onChange={(e) => setDream(e.target.value)}
                                required
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm min-h-[120px] focus:outline-none focus:border-blue-500/50 transition-colors resize-none placeholder:text-gray-700 leading-relaxed"
                            />
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-red-500/5 border border-red-500/20 text-[11px] text-red-500 font-bold">
                                        <ShieldCheck size={14} />
                                        {error}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={cn(
                                "w-full py-4 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all relative overflow-hidden group/btn",
                                isLoading
                                    ? "bg-gray-800 text-gray-400"
                                    : "bg-white text-black hover:bg-blue-600 hover:text-white"
                            )}
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    <span>Yozulur...</span>
                                </div>
                            ) : (
                                <>
                                    <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    {dict.dream.bondAiButton}
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* History Listing */}
                <div className="space-y-10">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 flex items-center gap-2.5">
                            <MessageSquare size={12} className="text-blue-500" />
                            {dict.dream.bondAiHistory}
                        </h3>
                        <div className="flex items-center gap-2 text-[9px] font-bold text-gray-700 uppercase tracking-widest">
                            <BadgeCheck size={10} className="text-green-500/50" />
                            Live Updates
                        </div>
                    </div>

                    <div className="space-y-12 relative">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {history.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="relative"
                                >
                                    {/* Question Block */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <User size={14} className="text-gray-500" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-[11px] font-black text-white/50">{item.userName} {item.userSurname.charAt(0)}.</span>
                                                <span className="text-[9px] text-gray-700 font-mono">• {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                            <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5">
                                                <p className="text-[13px] text-white/70 leading-relaxed italic italic">"{item.question}"</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* AI Response Block */}
                                    <div className="flex items-start gap-4 ml-8 md:ml-12 border-l-2 border-blue-500/20 pl-6">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                            <Sparkles size={14} className="text-blue-500" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">Bond AI</span>
                                                <div className="w-1 h-1 rounded-full bg-blue-500/30" />
                                                <span className="text-[8px] font-bold text-blue-500/50 uppercase tracking-tighter italic">Professional Analysis</span>
                                            </div>
                                            <div className="bg-blue-500/5 rounded-2xl p-5 border border-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                                                <p className="text-[13px] text-white/90 leading-relaxed font-medium">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {history.length === 0 && (
                            <div className="py-20 text-center border border-dashed border-white/5 rounded-[2rem] bg-white/[0.01]">
                                <Sparkles size={24} className="text-gray-800 mx-auto mb-4 opacity-50" />
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-800">Hələ ki, hər hansı bir analiz aparılmayıb.</p>
                                <p className="text-[9px] text-gray-900 mt-2">İlk sualı verən siz olun!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
