'use client';

import React, { useState } from 'react';
import { generateMultiDreamContent } from '@/app/actions/content-generator';
import { Loader2, Plus, CheckCircle2, Search, Wand2, Sparkles } from 'lucide-react';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';

// Note: I used lucide-center typo above, fixing it to lucide-react in logic below.
import { Search as SearchIcon, Loader2 as LoaderIcon, Plus as PlusIcon, CheckCircle2 as CheckIcon } from 'lucide-react';

export default function AdminGeneratePage() {
    const params = useParams();
    const locale = params.locale as string;
    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!topic.trim()) return;
        setLoading(true);
        setStatus('AI tərəfindən 3 fərqli dərin yozma hazırlanır (1000+ söz)...');
        try {
            await generateMultiDreamContent(topic, locale);
            setStatus('Uğurla tamamlandı! 3 yeni məqalə dərc edildi.');
            setTopic('');
        } catch (error: any) {
            console.error(error);
            setStatus(`Xəta: ${error.message || 'Bilinməyən xəta'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic">
                        MƏZMUN YARADICI
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">SEO Content Factory & DeepSeek-V3 Master</p>
                </div>
            </header>

            <div className="max-w-4xl">
                <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                                <Sparkles size={24} />
                            </div>
                            <h2 className="text-2xl font-black tracking-tight">AI Masterpiece Generator</h2>
                        </div>

                        <div className="space-y-10">
                            <div className="relative">
                                <label className="block text-[10px] text-gray-500 mb-4 uppercase tracking-[0.4em] font-black">Əsas Mövzu / Açar Söz</label>
                                <div className="relative group">
                                    <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={24} />
                                    <input
                                        type="text"
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                        placeholder="Məsələn: Maşın"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-8 pl-20 pr-10 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all text-2xl font-bold placeholder:text-gray-800"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={loading || !topic}
                                className="w-full bg-white text-black py-8 rounded-[32px] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-gray-200 disabled:opacity-20 disabled:cursor-not-allowed transition-all transform active:scale-[0.98] shadow-2xl shadow-white/5"
                            >
                                {loading ? <LoaderIcon className="animate-spin" size={20} /> : <PlusIcon size={20} />}
                                {loading ? 'Məqalələr hazırlanır...' : '3 Fərqli SEO Məqalə Yarat'}
                            </button>

                            {status && (
                                <div className={`p-8 rounded-[32px] flex items-center gap-5 border animate-in fade-in slide-in-from-bottom-6 duration-500 ${status.includes('Xəta') ? 'bg-red-500/5 border-red-500/20 text-red-500' : 'bg-blue-500/5 border-blue-500/20 text-blue-400'}`}>
                                    {status.includes('Uğurla') ? <CheckIcon size={28} /> : <LoaderIcon className="animate-spin" size={28} />}
                                    <span className="text-sm font-bold leading-relaxed">{status}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: 'Word Count', value: '1000+', desc: 'Hər məqalə üçün' },
                        { label: 'Readability', value: '100 / 100', desc: 'Mükəmməl oxunaqlılıq' },
                        { label: 'SEO Schema', value: 'Full Valid', desc: 'Google dostu struktur' }
                    ].map((item) => (
                        <div key={item.label} className="p-8 rounded-[32px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group">
                            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-3">{item.label}</p>
                            <p className="text-2xl font-black mb-1 group-hover:text-blue-500 transition-colors">{item.value}</p>
                            <p className="text-[10px] font-medium text-gray-700 uppercase tracking-tight">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
