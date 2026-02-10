'use client';

import React, { useState, useEffect } from 'react';
import { Loader2, Plus, ListChecks, Send, Trash2, Sparkles, Wand2, Search, Check, ChevronRight, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getQueue, saveQueue, getDictionaryAZ } from '@/app/actions/queue';
import { cn } from '@/lib/utils';

const ALPHABET = "ABCÇDEƏFGHIİJKLMNOÖPRSŞTUÜVYZ".split("");

export default function AdminQueuePage() {
    const params = useParams();
    const [topic, setTopic] = useState('');
    const [queue, setQueue] = useState<string[]>([]);
    const [dictionary, setDictionary] = useState<Record<string, string[]>>({});
    const [selectedLetter, setSelectedLetter] = useState('A');
    const [selectedTrends, setSelectedTrends] = useState<string[]>([]);
    const [lastAction, setLastAction] = useState<string | null>(null);

    useEffect(() => {
        const init = async () => {
            const [q, dict] = await Promise.all([getQueue(), getDictionaryAZ()]);
            setQueue(q);
            setDictionary(dict);
        };
        init();
    }, []);

    const addToQueue = async (topicsToAdd: string[]) => {
        const filtered = topicsToAdd.filter(t => !queue.includes(t));
        if (filtered.length === 0) return;
        const newQueue = [...queue, ...filtered];
        setQueue(newQueue);
        await saveQueue(newQueue);
        setLastAction(`${filtered.length} mövzu əlavə edildi`);
        setTimeout(() => setLastAction(null), 2000);
    };

    const toggleTrend = (item: string) => {
        setSelectedTrends(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    const toggleAllTrends = () => {
        const currentTrends = dictionary[selectedLetter] || [];
        if (selectedTrends.length === currentTrends.length) {
            setSelectedTrends([]);
        } else {
            setSelectedTrends(currentTrends);
        }
    };

    const addSelectedTrends = () => {
        const topics = selectedTrends.map(t => `Yuxuda ${t.toLowerCase()} görmək`);
        addToQueue(topics);
        setSelectedTrends([]);
    };

    const clearQueue = async () => {
        setQueue([]);
        await saveQueue([]);
    };

    const copyCommand = () => {
        navigator.clipboard.writeText("Növbəni emal et");
        setLastAction('Əmr kopyalandı!');
        setTimeout(() => setLastAction(null), 3000);
    };

    return (
        <div className="space-y-8">
            {lastAction && (
                <div className="fixed top-24 right-10 z-[100] px-6 py-3 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl animate-in fade-in slide-in-from-top-4">
                    {lastAction}
                </div>
            )}

            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic">
                        SEO FABRİKİ
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Topic Cluster & Internal Linking System</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-8">
                    <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-black flex items-center gap-3">
                                    <Sparkles className="text-blue-500" />
                                    A-Z Trend Kəşfiyyatı
                                </h2>
                                {(dictionary[selectedLetter] || []).length > 0 && (
                                    <button
                                        onClick={toggleAllTrends}
                                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors"
                                    >
                                        <CheckSquare size={14} />
                                        {selectedTrends.length === (dictionary[selectedLetter] || []).length ? "Seçimi ləğv et" : "Hamısını seç"}
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {ALPHABET.map(letter => (
                                    <button
                                        key={letter}
                                        onClick={() => {
                                            setSelectedLetter(letter);
                                            setSelectedTrends([]);
                                        }}
                                        className={cn(
                                            "w-10 h-10 rounded-xl font-black transition-all text-xs",
                                            selectedLetter === letter
                                                ? "bg-white text-black scale-110 shadow-xl shadow-white/10"
                                                : "bg-white/5 text-gray-500 hover:bg-white/10"
                                        )}
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {(dictionary[selectedLetter] || []).map(item => (
                                    <button
                                        key={item}
                                        onClick={() => toggleTrend(item)}
                                        className={cn(
                                            "p-4 rounded-xl border transition-all text-left flex items-center justify-between group",
                                            selectedTrends.includes(item)
                                                ? "bg-blue-600 border-blue-400 text-white"
                                                : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/20"
                                        )}
                                    >
                                        <span className="text-[10px] font-bold truncate">{item}</span>
                                        {selectedTrends.includes(item) ? <Check size={12} /> : <Plus size={12} className="opacity-0 group-hover:opacity-100" />}
                                    </button>
                                ))}
                            </div>

                            {selectedTrends.length > 0 && (
                                <button
                                    onClick={addSelectedTrends}
                                    className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/20"
                                >
                                    Seçilmiş {selectedTrends.length} mövzunu növbəyə at
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="p-8 bg-white/[0.01] border border-white/5 rounded-[40px] ">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="Əl ilə mövzu əlavə et..."
                                className="flex-1 bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-white/30 transition-all text-sm"
                            />
                            <button
                                onClick={() => { addToQueue([topic]); setTopic(''); }}
                                className="bg-white text-black px-8 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-gray-200 transition-all"
                            >
                                Əlavə Et
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-10 h-fit sticky top-24 shadow-2xl">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Növbə ({queue.length})</h3>
                            {queue.length > 0 && (
                                <button onClick={clearQueue} className="text-red-500/50 hover:text-red-500 transition-colors">
                                    <Trash2 size={16} />
                                </button>
                            )}
                        </div>

                        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar mb-10">
                            {queue.map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] font-bold text-gray-400 flex items-center gap-3">
                                    <span className="text-blue-500/50">#0{i + 1}</span>
                                    <span className="line-clamp-1">{item}</span>
                                </div>
                            ))}
                        </div>

                        {queue.length > 0 && (
                            <button
                                onClick={copyCommand}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-blue-500/20 hover:scale-[1.02] transition-transform active:scale-[0.98]"
                            >
                                Növbəni Emal Et
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
            `}</style>
        </div>
    );
}
