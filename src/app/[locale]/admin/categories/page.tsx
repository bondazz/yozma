import React from 'react';
import { Layers, Plus, Search, Tag } from 'lucide-react';

export default function AdminCategoriesPage() {
    const categories = [
        { name: 'Heyvanlar', count: 124, slug: 'heyvanlar' },
        { name: 'Təbiət', count: 85, slug: 'tebiet' },
        { name: 'İnsanlar', count: 210, slug: 'insanlar' },
        { name: 'Əşyalar', count: 156, slug: 'esyalar' },
    ];

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic">
                        KATEQORİYALAR
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Structure & Content Classification</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-2">
                    <Plus size={14} /> Yeni Kateqoriya
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <div key={cat.slug} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                            <Layers size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                                    <Tag size={20} />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.3em] font-mono text-gray-700 uppercase">Category #{cat.slug.substring(0, 3)}</span>
                            </div>
                            <h3 className="text-2xl font-black mb-1">{cat.name}</h3>
                            <p className="text-sm font-bold text-gray-600 mb-6">{cat.count} məqalə mövcuddur</p>

                            <div className="flex gap-2">
                                <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[9px] font-black uppercase tracking-widest transition-colors">Redaktə</button>
                                <button className="px-4 py-2 rounded-xl bg-red-500/5 hover:bg-red-500/10 text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors">Sil</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
