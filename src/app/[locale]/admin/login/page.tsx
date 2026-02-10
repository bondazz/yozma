'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, ChevronRight, Sparkles, Loader2 } from 'lucide-react';
import { login } from '@/app/actions/auth';
import { useRouter, useParams } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';

export default function AdminLoginPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const params = useParams();
    const locale = params.locale as string;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const result = await login(formData);

        if (result.success) {
            router.push(`/${locale}/admin`);
        } else {
            setError(result.error || 'Giriş uğursuz oldu.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700" />

                {/* Moving Stars/Dots */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: Math.random()
                        }}
                        animate={{
                            y: [null, Math.random() * -100 + "%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                {/* Glass Card */}
                <div className="bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
                    {/* Inner Glow Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                    <div className="flex justify-center mb-10">
                        <Logo lang={locale} className="h-12" variant="full" />
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-2xl font-black tracking-tighter mb-2 italic">ADMİN GİRİŞİ</h1>
                        <div className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Bond.az Secure Protocol</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative group">
                                <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.3em] mb-3 ml-2">İnzibatçı E-poçtu</label>
                                <div className="relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="info@bond.az"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-sm font-bold placeholder:text-gray-800"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.3em] mb-3 ml-2">Təhlükəsizlik Şifrəsi</label>
                                <div className="relative">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-purple-500 transition-colors" size={18} />
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all text-sm font-bold placeholder:text-gray-800"
                                    />
                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest p-4 rounded-xl text-center"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            disabled={loading}
                            className="w-full group relative overflow-hidden bg-white text-black py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-[0.98] disabled:opacity-50"
                        >
                            <div className="relative z-10 flex items-center justify-center gap-3">
                                {loading ? <Loader2 className="animate-spin" size={18} /> : (
                                    <>
                                        <span>Giriş et</span>
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </div>

                            {/* Hover effect light */}
                            <motion.div
                                className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"
                                layoutId="btn-hover"
                            />
                        </button>
                    </form>

                    <div className="mt-10 flex items-center justify-center gap-6 opacity-20">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                        <Sparkles size={16} />
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
                    </div>

                    <p className="text-center mt-6 text-[8px] font-black text-gray-700 uppercase tracking-[0.5em]">
                        Bond.az Unified Login System
                    </p>
                </div>

                {/* Bottom Shadow Glow */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-10 bg-blue-600/20 blur-[60px] rounded-full z-[-1]" />
            </motion.div>
        </div>
    );
}
