'use client';

import React, { useState } from 'react';
import {
    Play,
    Cpu,
    Terminal,
    Zap,
    Languages,
    AlertCircle,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminAutoPage() {
    const [selectedLang, setSelectedLang] = useState('az');
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    async function handleStart() {
        setIsRunning(true);
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Engine starting in DIRECT-TO-DB mode...`]);

        // In a real production environment, this would call a backend trigger.
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Status: Bypassing Admin Login for maximum speed.`]);
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Action: Run 'node scripts/dream-bot.js ${selectedLang}' in terminal.`]);

        // Simulating the bot check
        setTimeout(() => {
            setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] Monitoring database synchronization...`]);
        }, 2000);
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter mb-2 italic uppercase">
                        AI Automation
                    </h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em]">Gemini-V3 Content Bot Control Center</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Control Panel */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white/[0.02] border border-white/5 rounded-[48px] p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full -ml-40 -mt-40" />

                        <div className="relative z-10 space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="p-4 rounded-3xl bg-purple-500/10 text-purple-500">
                                    <Cpu size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight">Bot Controller</h2>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Automation Settings</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="block text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black mb-4 ml-4">Hədəf Dil</label>
                                <div className="grid grid-cols-3 gap-4">
                                    {['az', 'tr', 'en'].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => setSelectedLang(l)}
                                            className={cn(
                                                "py-6 rounded-[28px] border transition-all flex flex-col items-center gap-3",
                                                selectedLang === l
                                                    ? "bg-white text-black border-white shadow-2xl shadow-white/5"
                                                    : "bg-white/[0.02] border-white/5 text-gray-500 hover:border-white/20 hover:text-white"
                                            )}
                                        >
                                            <span className="text-2xl">{l === 'az' ? '🇦🇿' : l === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest">{l}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleStart}
                                disabled={isRunning}
                                className={cn(
                                    "w-full py-10 rounded-[40px] font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-5 transition-all transform active:scale-[0.98] shadow-2xl",
                                    isRunning
                                        ? "bg-purple-500/10 text-purple-500 border border-purple-500/20"
                                        : "bg-white text-black hover:bg-purple-200"
                                )}
                            >
                                {isRunning ? <Loader2 className="animate-spin" size={20} /> : <Play size={20} />}
                                {isRunning ? 'Bot İşləyir...' : 'Bota Start Ver'}
                            </button>

                            <div className="p-6 rounded-[32px] bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
                                <AlertCircle className="text-amber-500 shrink-0" size={20} />
                                <p className="text-[10px] font-bold text-amber-500/80 leading-relaxed uppercase tracking-wider">
                                    Bot işə başlamazdan əvvəl "Manual Yozmalar" siyahısında kifayət qədər mövzu olduğundan əmin olun.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Log Area */}
                <div className="lg:col-span-7">
                    <div className="bg-black border border-white/5 rounded-[48px] p-10 h-full flex flex-col shadow-inner">
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-green-500/10 text-green-500">
                                    <Terminal size={20} />
                                </div>
                                <h2 className="text-xl font-black tracking-tight">Live Console Logs</h2>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                        </div>

                        <div className="flex-1 font-mono text-xs space-y-3 overflow-y-auto pr-4 scrollbar-hide max-h-[500px]">
                            {logs.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center opacity-10 gap-4">
                                    <Zap size={64} />
                                    <p className="uppercase tracking-[0.5em] font-black">Waiting for input...</p>
                                </div>
                            ) : (
                                logs.map((log, i) => (
                                    <div key={i} className={cn(
                                        "py-2 px-4 rounded-lg bg-white/[0.02] border-l-2",
                                        log.includes('UI:') ? "border-amber-500 text-amber-500/80" : "border-green-500 text-green-500/80"
                                    )}>
                                        {log}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
