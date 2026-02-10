import React from 'react';
import { Database, Server, Shield, HardDrive, ArrowUpRight } from 'lucide-react';

export default function AdminDatabasePage() {
    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic">
                        DATABAZA
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Supabase Infrastructure & Storage Control</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="p-4 rounded-3xl bg-green-500/10 text-green-500">
                            <Server size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black">Supabase Cloud</h3>
                            <p className="text-[10px] font-black uppercase tracking-widest text-green-500">Status: Operational</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5">
                            <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest mb-1">Region</p>
                            <p className="text-sm font-bold">EU (Frankfurt)</p>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5">
                            <p className="text-[9px] font-black text-gray-700 uppercase tracking-widest mb-1">SSL</p>
                            <p className="text-sm font-bold text-blue-500">Enabled</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-[32px] bg-black border border-white/10 font-mono text-[11px] text-gray-500 leading-relaxed">
                        <p># Connection String</p>
                        <p className="text-blue-500/50 break-all">postgresql://postgres:[password]@db.daozaxwunpltmszyoebj.supabase.co:5432/postgres</p>
                    </div>
                </div>

                <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 space-y-8 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-3xl bg-blue-500/10 text-blue-500">
                                <Shield size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black">Security & Backups</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Daily Snapshots: Active</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                                <span className="text-xs font-bold text-gray-400">RLS Policies</span>
                                <span className="bg-blue-500/20 text-blue-500 text-[10px] font-black px-3 py-1 rounded-full uppercase">Strict</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5">
                                <span className="text-xs font-bold text-gray-400">Total Storage</span>
                                <span className="text-white font-bold">128 MB / 500 MB</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-5 rounded-[24px] bg-white/5 hover:bg-white/10 border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                        Supabase Panelini Aç <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
