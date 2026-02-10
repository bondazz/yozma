'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Share2, X, BrainCircuit, AlertCircle } from 'lucide-react';
import { BorderTrail } from '@/components/ui/border-trail';
import { interpretDream } from '@/app/actions/interpret';

interface DreamSearchProps {
    placeholder: string;
    buttonText: string;
    lang: string;
}

export const DreamSearch: React.FC<DreamSearchProps> = ({ placeholder, buttonText, lang }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const isError = result?.startsWith("ERROR_TYPE_DREAM:");
    const displayResult = isError ? result.replace("ERROR_TYPE_DREAM:", "").trim() : result;

    useEffect(() => {
        if (result) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [result]);

    const handleInterpret = async () => {
        if (!query.trim() || loading) return;
        setLoading(true);
        try {
            const interpretation = await interpretDream(query, lang);
            setResult(interpretation);
        } catch (error) {
            setResult("Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="relative group">
                <motion.div
                    animate={{
                        boxShadow: isFocused ? '0 0 30px rgba(255, 255, 255, 0.08)' : '0 0 15px rgba(255, 255, 255, 0.03)',
                        scale: isFocused ? 1.005 : 1
                    }}
                    className={`relative flex items-center bg-black/40 backdrop-blur-3xl border transition-all duration-500 rounded-2xl overflow-hidden ${isFocused ? 'border-white/20' : 'border-white/5'}`}
                >
                    {(isFocused || loading) && (
                        <BorderTrail
                            style={{ background: loading ? 'linear-gradient(to right, transparent, #3b82f6, transparent)' : 'linear-gradient(to right, transparent, #fff, transparent)' }}
                            size={100}
                            transition={{ duration: loading ? 1.5 : 4, repeat: Infinity, ease: "linear" }}
                        />
                    )}
                    <div className="pl-5 text-gray-500">
                        {loading ? <Loader2 size={18} className="text-blue-500 animate-spin" /> : <BrainCircuit size={18} className={isFocused ? 'text-white' : ''} />}
                    </div>

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onKeyPress={(e) => e.key === 'Enter' && handleInterpret()}
                        placeholder={placeholder}
                        className="w-full py-4 px-4 bg-transparent text-white placeholder:text-gray-700 outline-none text-base md:text-lg font-light"
                    />

                    <div className="pr-3">
                        <button
                            onClick={handleInterpret}
                            disabled={loading || !query.trim()}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 font-bold text-sm ${query.length > 0 && !loading ? 'bg-white text-black shadow-lg hover:bg-gray-100 active:scale-95' : 'bg-white/5 text-gray-600 cursor-not-allowed'}`}
                        >
                            {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                            <span className="hidden sm:inline">{loading ? "..." : buttonText}</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Result Modal Overlay */}
            <AnimatePresence>
                {result && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setResult(null)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`p-6 pb-4 flex justify-between items-center border-b border-white/5 ${isError ? 'bg-red-500/5' : 'bg-white/2'}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isError ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'}`}>
                                        {isError ? <AlertCircle size={20} /> : <Sparkles size={20} />}
                                    </div>
                                    <div>
                                        <h3 className="text-lg text-white font-bold tracking-tight">{isError ? 'Sistem Bildirişi' : 'Yuxu Analizi'}</h3>
                                        {!isError && <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Bond AI Analysis</p>}
                                    </div>
                                </div>
                                <button onClick={() => setResult(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-white">
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="p-6 md:p-8">
                                <p className={`text-base leading-relaxed ${isError ? 'text-gray-400 italic' : 'text-gray-200'}`}>
                                    {displayResult}
                                </p>
                            </div>

                            {!isError && (
                                <div className="px-6 pb-6 flex justify-end">
                                    <button
                                        onClick={() => navigator.share && navigator.share({ title: 'Bond.az', text: displayResult }).catch(() => { })}
                                        className="flex items-center gap-2 text-[10px] uppercase font-bold text-gray-500 hover:text-white transition-colors"
                                    >
                                        <Share2 size={14} /> Paylaş
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};
