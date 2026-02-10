'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Save, ChevronLeft, Loader2, Sparkles, AlertCircle, Check, Trash2 } from 'lucide-react';
import { adminGetPost, adminUpdatePost } from '@/app/actions/admin-posts';
import { DreamPost } from '@/lib/dream-storage';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function EditPostPage() {
    const params = useParams();
    const router = useRouter();
    const locale = params.locale as string;
    const slug = params.slug as string;

    const [post, setPost] = useState<DreamPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const data = await adminGetPost(slug, locale);
            if (data) {
                setPost(data);
            } else {
                router.push(`/${locale}/admin/posts`);
            }
            setLoading(false);
        };
        fetchPost();
    }, [slug, locale]);

    const handleChange = (field: keyof DreamPost, value: any) => {
        if (!post) return;
        setPost({ ...post, [field]: value });
    };

    const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
        if (!post) return;
        const newFaqs = [...post.faqs];
        newFaqs[index][field] = value;
        setPost({ ...post, faqs: newFaqs });
    };

    const addFaq = () => {
        if (!post) return;
        setPost({ ...post, faqs: [...post.faqs, { question: '', answer: '' }] });
    };

    const removeFaq = (index: number) => {
        if (!post) return;
        setPost({ ...post, faqs: post.faqs.filter((_, i) => i !== index) });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!post) return;
        setSaving(true);
        setStatus(null);
        try {
            const res = await adminUpdatePost(post);
            if (res.success) {
                setStatus({ type: 'success', message: 'Dəyişikliklər uğurla yadda saxlanıldı!' });
                setTimeout(() => setStatus(null), 3000);
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Xəta baş verdi!' });
        }
        setSaving(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <Loader2 className="animate-spin text-blue-500" size={48} />
            </div>
        );
    }

    if (!post) return null;

    return (
        <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12">
            <div className="max-w-5xl mx-auto">
                <form onSubmit={handleSave}>
                    <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <Link
                                href={`/${locale}/admin/posts`}
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                            >
                                <ChevronLeft size={20} />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-black tracking-tighter">REDAKTƏ: {post.title}</h1>
                                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">Slug: /{post.slug}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            {status && (
                                <div className={cn(
                                    "px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-2",
                                    status.type === 'success' ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                                )}>
                                    {status.type === 'success' ? <Check size={14} /> : <AlertCircle size={14} />}
                                    {status.message}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={saving}
                                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2 disabled:opacity-50"
                            >
                                {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                                Yadda Saxla
                            </button>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-8">
                            {/* Main Content */}
                            <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Məqalə Başlığı</label>
                                    <input
                                        type="text"
                                        value={post.title}
                                        onChange={(e) => handleChange('title', e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all font-bold"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Qısa Xülasə (Excerpt)</label>
                                    <textarea
                                        rows={3}
                                        value={post.excerpt}
                                        onChange={(e) => handleChange('excerpt', e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-sm leading-relaxed"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Highlight Box / Snippet (40-50 söz)</label>
                                    <textarea
                                        rows={3}
                                        value={post.highlightBox}
                                        onChange={(e) => handleChange('highlightBox', e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-sm leading-relaxed italic"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Əsas Kontent (HTML)</label>
                                        <span className="text-[8px] font-black text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded italic">HTML Enabled</span>
                                    </div>
                                    <textarea
                                        rows={20}
                                        value={post.content}
                                        onChange={(e) => handleChange('content', e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all font-mono text-xs leading-relaxed"
                                    />
                                </div>
                            </section>

                            {/* FAQ Section */}
                            <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                        <Sparkles className="text-blue-500" size={16} /> FAQ Bölməsi
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={addFaq}
                                        className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
                                    >
                                        + Sual Əlavə Et
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {post.faqs.map((faq, i) => (
                                        <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl relative group">
                                            <button
                                                type="button"
                                                onClick={() => removeFaq(i)}
                                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                                            >
                                                <Trash2 size={12} />
                                            </button>
                                            <input
                                                type="text"
                                                placeholder="Sual"
                                                value={faq.question}
                                                onChange={(e) => handleFaqChange(i, 'question', e.target.value)}
                                                className="w-full bg-transparent border-b border-white/10 pb-2 mb-4 outline-none focus:border-blue-500/50 transition-all font-bold text-sm"
                                            />
                                            <textarea
                                                rows={2}
                                                placeholder="Cavab"
                                                value={faq.answer}
                                                onChange={(e) => handleFaqChange(i, 'answer', e.target.value)}
                                                className="w-full bg-transparent outline-none text-xs text-gray-400 leading-relaxed"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            {/* SEO Settings */}
                            <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-4 mb-4">SEO NÖQTƏSİ</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">SEO Başlığı</label>
                                        <input
                                            type="text"
                                            value={post.seoTitle}
                                            onChange={(e) => handleChange('seoTitle', e.target.value)}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">SEO Description</label>
                                        <textarea
                                            rows={4}
                                            value={post.seoDescription}
                                            onChange={(e) => handleChange('seoDescription', e.target.value)}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs leading-relaxed"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Keywords (vergül ilə)</label>
                                        <textarea
                                            rows={3}
                                            value={post.keywords}
                                            onChange={(e) => handleChange('keywords', e.target.value)}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-[10px] font-mono"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">OG Image URL</label>
                                        <input
                                            type="text"
                                            value={post.ogImage || ''}
                                            onChange={(e) => handleChange('ogImage', e.target.value)}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-[10px]"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* SEO & Video Advanced Settings */}
                            <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-4 mb-4">REYTİNQ VƏ VİDEO</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Reytinq (0-5)</label>
                                        <input
                                            type="number"
                                            step="0.1"
                                            min="0"
                                            max="5"
                                            value={post.ratingValue}
                                            onChange={(e) => handleChange('ratingValue', parseFloat(e.target.value))}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Rəy Sayı</label>
                                        <input
                                            type="number"
                                            value={post.reviewCount}
                                            onChange={(e) => handleChange('reviewCount', parseInt(e.target.value))}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-4 border-t border-white/5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Video URL (Embed)</label>
                                        <input
                                            type="text"
                                            value={post.video?.url || ''}
                                            onChange={(e) => handleChange('video', { ...post.video, url: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Video Başlığı</label>
                                        <input
                                            type="text"
                                            value={post.video?.title || ''}
                                            onChange={(e) => handleChange('video', { ...post.video, title: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Metadata Settings */}
                            <section className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 space-y-6">
                                <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Metadata</h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Kateqoriya</label>
                                        <select
                                            value={post.category}
                                            onChange={(e) => handleChange('category', e.target.value)}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs appearance-none"
                                        >
                                            <option value="Animals">Animals</option>
                                            <option value="Nature">Nature</option>
                                            <option value="Feelings">Feelings</option>
                                            <option value="Objects">Objects</option>
                                            <option value="Action">Action</option>
                                            <option value="Mystic">Mystic</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Tarix</label>
                                        <input
                                            type="date"
                                            value={post.date.split('T')[0]}
                                            onChange={(e) => handleChange('date', new Date(e.target.value).toISOString())}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-xs color-white"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </form>
            </div>
            <style jsx global>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                    filter: invert(1);
                }
            `}</style>
        </div>
    );
}
