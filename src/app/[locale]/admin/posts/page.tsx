'use client';

import React, { useState, useEffect } from 'react';
import { Search, Edit2, Trash2, ExternalLink, Plus, Filter, Loader2 } from 'lucide-react';
import { adminGetAllPosts, adminDeletePost } from '@/app/actions/admin-posts';
import { DreamPost } from '@/lib/dream-storage';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminPostsPage() {
    const params = useParams();
    const locale = params.locale as string;
    const [posts, setPosts] = useState<DreamPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteLoading, setDeleteLoading] = useState<string | null>(null);

    useEffect(() => {
        fetchPosts();
    }, [locale]);

    const fetchPosts = async () => {
        setLoading(true);
        const data = await adminGetAllPosts(locale);
        setPosts(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setLoading(false);
    };

    const handleDelete = async (slug: string) => {
        if (!confirm('Bu postu silmək istədiyinizə əminsiniz?')) return;
        setDeleteLoading(slug);
        const res = await adminDeletePost(slug, locale);
        if (res.success) {
            setPosts(posts.filter(p => p.slug !== slug));
        }
        setDeleteLoading(null);
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic">
                        MƏQALƏLƏR
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Content Administration & SEO Control</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                        <Plus size={14} /> Yeni Post
                    </button>
                </div>
            </header>

            <div className="bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-white/10 flex flex-col md:flex-row gap-6 items-center justify-between bg-white/[0.02]">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Post axtar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-white/30 transition-all text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                        <span className="flex items-center gap-2">
                            <Filter size={14} /> {filteredPosts.length} nəticə
                        </span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/[0.01] border-b border-white/5">
                            <tr>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-widest text-gray-500 font-black">Başlıq & Slug</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-widest text-gray-500 font-black">Kateqoriya</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-widest text-gray-500 font-black">Tarix</th>
                                <th className="px-8 py-5 text-[10px] uppercase tracking-widest text-gray-500 font-black text-right">Əməliyyatlar</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center">
                                        <Loader2 className="animate-spin mx-auto text-blue-500 mb-4" />
                                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Yüklənir...</p>
                                    </td>
                                </tr>
                            ) : filteredPosts.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-8 py-20 text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
                                        Post tapılmadı.
                                    </td>
                                </tr>
                            ) : (
                                filteredPosts.map((post) => (
                                    <tr key={post.slug} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">{post.title}</div>
                                            <div className="text-[10px] text-gray-600 font-mono tracking-tighter">/{post.slug}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('az-AZ')}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-3">
                                                <Link
                                                    href={`/${locale}/yuxu-yozmalari/${post.slug}`}
                                                    target="_blank"
                                                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                                                    title="Bax"
                                                >
                                                    <ExternalLink size={16} />
                                                </Link>
                                                <Link
                                                    href={`/${locale}/admin/posts/${post.slug}`}
                                                    className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                                                    title="Redaktə et"
                                                >
                                                    <Edit2 size={16} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(post.slug)}
                                                    disabled={deleteLoading === post.slug}
                                                    className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all disabled:opacity-50"
                                                    title="Sil"
                                                >
                                                    {deleteLoading === post.slug ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
