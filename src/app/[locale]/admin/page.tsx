import React from 'react';
import {
    FileText,
    Sparkles,
    Users,
    TrendingUp,
    Clock,
    ArrowUpRight,
    Search,
    MessageSquare,
    Globe
} from 'lucide-react';
import { getAllDreams } from '@/lib/dream-storage';
import { getBondHistory } from '@/lib/bond-storage';
import Link from 'next/link';
import { format } from 'date-fns';

export default async function AdminDashboard({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    // Fetch real stats
    const dreams = await getAllDreams(locale);
    const bondInteractions = getBondHistory();

    const stats = [
        { label: 'Ümumi Yozmalar', value: dreams.length, icon: FileText, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'AI Analizlər', value: bondInteractions.length, icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { label: 'Daily PV', value: '4.2k', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
        { label: 'Dillər', value: '3', icon: Globe, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    ];

    return (
        <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                        <div className="flex items-start justify-between mb-4">
                            <div className={stat.bg + " p-3 rounded-2xl"}>
                                <stat.icon className={stat.color} size={20} />
                            </div>
                            <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest flex items-center gap-1">
                                +12% <ArrowUpRight size={10} className="text-green-500" />
                            </span>
                        </div>
                        <h3 className="text-2xl font-black tracking-tight">{stat.value}</h3>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Recent Activity */}
                <div className="lg:col-span-8">
                    <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 h-full">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-black tracking-tight flex items-center gap-3">
                                <Clock size={18} className="text-blue-500" /> Son Yozmalar
                            </h3>
                            <Link href={`/${locale}/admin/posts`} className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline">
                                Hamısına bax
                            </Link>
                        </div>

                        <div className="space-y-1">
                            {dreams.slice(0, 5).map((dream) => (
                                <div key={dream.slug} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.03] transition-all border border-transparent hover:border-white/5">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-[10px] font-black group-hover:scale-110 transition-transform">
                                            {dream.title.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white/90 leading-tight mb-1">{dream.title}</h4>
                                            <div className="flex items-center gap-3 text-[9px] font-bold text-gray-600 uppercase tracking-widest">
                                                <span>{dream.category}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-800" />
                                                <span>{new Date(dream.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-green-500/10 text-green-500 border border-green-500/10">
                                            Published
                                        </span>
                                        <button className="p-2 rounded-lg text-gray-700 hover:text-white transition-colors">
                                            <ArrowUpRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* AI Interactions Sidebar */}
                <div className="lg:col-span-4">
                    <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 h-full">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-lg font-black tracking-tight flex items-center gap-3">
                                <MessageSquare size={18} className="text-purple-500" /> AI Dialoqlar
                            </h3>
                        </div>

                        <div className="space-y-6">
                            {bondInteractions.slice(0, 4).map((interaction) => (
                                <div key={interaction.id} className="relative pl-6 border-l border-white/5">
                                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-500/10" />
                                    <div className="mb-2">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-1">
                                            {interaction.userName} {interaction.userSurname}
                                        </span>
                                        <p className="text-xs text-white/80 line-clamp-2 leading-relaxed italic">
                                            "{interaction.question}"
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-[8px] font-black text-gray-700 uppercase tracking-[0.2em]">
                                        <span>{new Date(interaction.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-800" />
                                        <span className="text-blue-500/50">Details</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-10 py-4 rounded-2xl bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                            Bütün Logları Gör
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
