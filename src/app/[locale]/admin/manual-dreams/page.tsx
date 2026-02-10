'use client';

import React, { useState, useEffect } from 'react';
import {
    adminGetManualDreams,
    adminAddManualDreams,
    adminDeleteManualDream
} from '@/app/actions/manual-dreams';
import {
    Plus,
    Trash2,
    Languages,
    Loader2,
    BookOpen,
    Search,
    AlertCircle
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminManualDreamsPage() {
    const params = useParams();
    const [lang, setLang] = useState('az');
    const [topics, setTopics] = useState<any[]>([]);
    const [newTopicsText, setNewTopicsText] = useState('');
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadDreams();
    }, [lang]);

    async function loadDreams() {
        setLoading(true);
        try {
            const data = await adminGetManualDreams(lang);
            setTopics(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function handleAdd() {
        if (!newTopicsText.trim()) return;
        setActionLoading(true);
        try {
            const topicList = newTopicsText.split('\n').filter(t => t.trim().length > 0);
            await adminAddManualDreams(topicList, lang);
            setNewTopicsText('');
            await loadDreams();
        } catch (error) {
            console.error(error);
        } finally {
            setActionLoading(false);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm('Bu yuxu başlığını silmək istədiyinizə əminsiniz?')) return;
        try {
            await adminDeleteManualDream(id, lang);
            setTopics(topics.filter(t => t.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    const filteredTopics = topics.filter(t =>
        t.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic uppercase">
                        Manual Dreams
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Hand-picked topics for automation</p>
                </div>

                <div className="flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/5">
                    {['az', 'tr', 'en'].map((l) => (
                        <button
                            key={l}
                            onClick={() => setLang(l)}
                            className={cn(
                                "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                lang === l
                                    ? "bg-white text-black shadow-lg"
                                    : "text-gray-500 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {l === 'az' ? '🇦🇿 AZ' : l === 'tr' ? '🇹🇷 TR' : '🇺🇸 EN'}
                        </button>
                    ))}
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Input Area */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -mr-20 -mt-20" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                                    <Plus size={20} />
                                </div>
                                <h2 className="text-xl font-black tracking-tight tracking-tight px-1">Yeni Başlıqlar</h2>
                            </div>

                            <div className="space-y-4">
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-2">
                                    Hər sətirdə 1 başlıq yazın
                                </p>
                                <textarea
                                    value={newTopicsText}
                                    onChange={(e) => setNewTopicsText(e.target.value)}
                                    placeholder="Yuxuda it görmək&#10;Yuxuda dəniz görmək..."
                                    className="w-full h-64 bg-black/40 border border-white/10 rounded-[28px] p-6 text-sm font-medium focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-800 scrollbar-hide"
                                />
                            </div>

                            <button
                                onClick={handleAdd}
                                disabled={actionLoading || !newTopicsText.trim()}
                                className="w-full bg-white text-black py-5 rounded-[24px] font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-blue-200 transition-all disabled:opacity-20 active:scale-[0.98]"
                            >
                                {actionLoading ? <Loader2 className="animate-spin" size={16} /> : <Plus size={16} />}
                                Siyahıya Əlavə Et
                            </button>
                        </div>
                    </div>
                </div>

                {/* List Area */}
                <div className="lg:col-span-8">
                    <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 h-full flex flex-col">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight">Siyahı ({filteredTopics.length})</h2>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Botun istifadə edəcəyi mövzular</p>
                                </div>
                            </div>

                            <div className="relative group min-w-[300px]">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-purple-500 transition-colors" size={18} />
                                <input
                                    type="text"
                                    placeholder="Axtar..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 outline-none focus:border-purple-500/50 transition-all text-sm font-bold placeholder:text-gray-800"
                                />
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex-1 flex flex-col items-center justify-center gap-4 opacity-30">
                                <Loader2 className="animate-spin text-purple-500" size={48} />
                                <p className="text-[10px] font-black uppercase tracking-widest">Yüklənir...</p>
                            </div>
                        ) : filteredTopics.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center gap-6 border-2 border-dashed border-white/5 rounded-[32px] p-20">
                                <div className="p-6 rounded-full bg-white/[0.02] text-gray-800">
                                    <AlertCircle size={48} />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-black text-gray-700 mb-2">Heç bir başlıq tapılmadı</p>
                                    <p className="text-xs font-medium text-gray-800">Sol tərəfdən yeni mövzular əlavə edərək bota iş verə bilərsiniz.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-start overflow-y-auto pr-4 scrollbar-hide max-h-[600px]">
                                {filteredTopics.map((topic) => (
                                    <div
                                        key={topic.id}
                                        className="group flex items-center justify-between p-5 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
                                    >
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div className="w-8 h-8 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[10px] font-black text-gray-500 group-hover:scale-110 group-hover:text-white transition-all">
                                                {topic.topic.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="text-sm font-bold text-white/80 truncate">
                                                {topic.topic}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(topic.id)}
                                            className="p-3 rounded-xl text-gray-700 hover:text-red-500 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
