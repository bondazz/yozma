'use client';

import React, { useState } from 'react';
import { adminBatchCreatePosts } from '@/app/actions/admin-posts';
import { Loader2, Database, CheckCircle2, AlertCircle, FileJson, Languages } from 'lucide-react';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminBatchImportPage() {
    const params = useParams();
    const currentLocale = params.locale as string;
    const [jsonContent, setJsonContent] = useState('');
    const [targetLang, setTargetLang] = useState(currentLocale);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

    const handleImport = async () => {
        if (!jsonContent.trim()) return;
        setLoading(true);
        setStatus({ type: 'info', message: 'JSON oxunur və databazaya yüklənir...' });

        try {
            let posts = JSON.parse(jsonContent);

            // If it's a single object, wrap it in an array
            if (!Array.isArray(posts)) {
                posts = [posts];
            }

            // Helper to parse stringified JSON fields if they come from exports
            const parseIfString = (val: any) => {
                if (typeof val === 'string' && (val.trim().startsWith('{') || val.trim().startsWith('['))) {
                    try {
                        return JSON.parse(val);
                    } catch (e) {
                        return val;
                    }
                }
                return val;
            };

            // Map and validate
            const validatedPosts = posts.map((post: any) => ({
                slug: post.slug,
                title: post.title,
                excerpt: post.excerpt || '',
                highlightBox: post.highlightBox || post.highlight_box || '',
                content: post.content,
                category: post.category || 'General',
                date: post.date || new Date().toISOString(),
                lang: targetLang, // Force target language
                seoTitle: post.seoTitle || post.seo_title || post.title,
                seoDescription: post.seoDescription || post.seo_description || post.excerpt,
                keywords: post.keywords || '',
                ogImage: post.ogImage || post.og_image,
                ratingValue: Number(post.ratingValue || post.rating_value) || 4.5,
                reviewCount: Number(post.reviewCount || post.review_count) || 10,
                video: parseIfString(post.video),
                faqs: parseIfString(post.faqs) || [],
                relatedSlugs: parseIfString(post.relatedSlugs || post.related_slugs) || []
            }));

            const result = await adminBatchCreatePosts(validatedPosts);

            if (result.success) {
                setStatus({ type: 'success', message: `${validatedPosts.length} məqalə uğurla yükləndi!` });
                setJsonContent('');
            }
        } catch (error: any) {
            console.error(error);
            setStatus({ type: 'error', message: `Xəta: ${error.message || 'JSON formatı düzgün deyil'}` });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic uppercase">
                        Toplu JSON Import
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Database Batch Processing Engine</p>
                </div>
            </header>

            <div className="max-w-5xl">
                <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -mr-40 -mt-40" />

                    <div className="relative z-10 space-y-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-[24px] bg-purple-500/10 text-purple-500">
                                    <FileJson size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight">JSON Verilənləri</h2>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Massive Data Entry</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white/[0.03] p-2 rounded-[24px] border border-white/5">
                                <div className="flex items-center gap-2 px-4 text-purple-500">
                                    <Languages size={18} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Dil:</span>
                                </div>
                                <select
                                    value={targetLang}
                                    onChange={(e) => setTargetLang(e.target.value)}
                                    className="bg-black border border-white/10 rounded-[18px] px-6 py-3 text-xs font-black uppercase tracking-widest outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer hover:bg-white/5"
                                >
                                    <option value="az">🇦🇿 Azərbaycan</option>
                                    <option value="tr">🇹🇷 Türkçe</option>
                                    <option value="en">🇺🇸 English</option>
                                    <option value="ru">🇷🇺 Русский</option>
                                    <option value="de">🇩🇪 Deutsch</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black ml-4">JSON Kodu Past Edin</label>
                            <div className="relative group">
                                <textarea
                                    value={jsonContent}
                                    onChange={(e) => setJsonContent(e.target.value)}
                                    placeholder='[{ "slug": "test", "title": "...", "content": "..." }]'
                                    className="w-full h-96 bg-black/40 border border-white/10 rounded-[32px] p-8 text-sm font-mono focus:border-purple-500/50 outline-none transition-all placeholder:text-gray-800 scrollbar-hide group-hover:border-white/20"
                                />
                                <div className="absolute top-6 right-6 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleImport}
                            disabled={loading || !jsonContent}
                            className="w-full bg-white text-black py-8 rounded-[32px] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 hover:bg-purple-200 transition-all transform active:scale-[0.98] shadow-2xl shadow-purple-500/10 disabled:opacity-20 translate-y-2"
                        >
                            {loading ? <Loader2 className="animate-spin" size={20} /> : <Database size={20} />}
                            {loading ? 'Databazaya yazılır...' : 'Batch Import İşlət'}
                        </button>

                        {status && (
                            <div className={cn(
                                "p-8 rounded-[32px] flex items-center gap-5 border animate-in fade-in slide-in-from-bottom-6 duration-500",
                                status.type === 'error' ? 'bg-red-500/5 border-red-500/20 text-red-500' :
                                    status.type === 'success' ? 'bg-green-500/5 border-green-500/20 text-green-500' :
                                        'bg-purple-500/5 border-purple-500/20 text-purple-400'
                            )}>
                                {status.type === 'success' ? <CheckCircle2 size={24} /> :
                                    status.type === 'error' ? <AlertCircle size={24} /> :
                                        <Loader2 className="animate-spin" size={24} />}
                                <span className="text-sm font-bold tracking-tight">{status.message}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: 'Format', value: 'JSON Array', desc: 'Dreams Table Structure' },
                        { label: 'Validation', value: 'Auto-Repair', desc: 'Missing fields handled' },
                        { label: 'Speed', value: 'Instant', desc: 'Supabase Upsert & RPC' }
                    ].map((item) => (
                        <div key={item.label} className="p-8 rounded-[32px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group hover:-translate-y-1">
                            <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest mb-3">{item.label}</p>
                            <p className="text-2xl font-black mb-1 group-hover:text-purple-500 transition-colors uppercase tracking-tight">{item.value}</p>
                            <p className="text-[10px] font-bold text-gray-800 uppercase tracking-tighter">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
