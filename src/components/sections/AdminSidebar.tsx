'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    Settings,
    Layers,
    Trash2,
    ChevronRight,
    Search,
    Database,
    LineChart,
    LogOut,
    BookOpen,
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/Logo';

interface NavItemProps {
    href: string;
    icon: React.ElementType;
    label: string;
    active?: boolean;
    count?: number;
}

const NavItem = ({ href, icon: Icon, label, active, count }: NavItemProps) => (
    <Link
        href={href}
        className={cn(
            "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
            active
                ? "bg-white/5 text-white shadow-[0_0_15px_rgba(255,255,255,0.03)] border border-white/5"
                : "text-gray-500 hover:text-white hover:bg-white/[0.02]"
        )}
    >
        <div className="flex items-center gap-3">
            <Icon size={18} className={cn(
                "transition-colors duration-300",
                active ? "text-blue-500" : "text-gray-600 group-hover:text-gray-300"
            )} />
            <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
        </div>
        {count !== undefined && (
            <span className="bg-red-500/10 text-red-500 text-[9px] font-black px-1.5 py-0.5 rounded-md min-w-[20px] text-center">
                {count}
            </span>
        )}
        {active && (
            <motion.div
                layoutId="sidebar-active"
                className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full"
                initial={false}
            />
        )}
    </Link>
);


import { useRouter } from 'next/navigation';
import { logout } from '@/app/actions/auth';

export const AdminSidebar = ({ locale }: { locale: string }) => {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { href: `/${locale}/admin`, icon: LayoutDashboard, label: 'Dashboard' },
        { href: `/${locale}/admin/posts`, icon: FileText, label: 'Məqalələr' },
        { href: `/${locale}/admin/generate`, icon: PlusCircle, label: 'Yeni Yozma' },
        { href: `/${locale}/admin/batch`, icon: Database, label: 'Toplu Yükləmə' },
        { href: `/${locale}/admin/manual-dreams`, icon: BookOpen, label: 'Manual Yozmalar' },
        { href: `/${locale}/admin/auto`, icon: Zap, label: 'Avtomatlaşdırma' },
        { href: `/${locale}/admin/queue`, icon: LineChart, label: 'Növbə (Queue)', count: 0 },
        { href: `/${locale}/admin/categories`, icon: Layers, label: 'Kateqoriyalar' },
    ];

    const handleLogout = async () => {
        await logout();
        router.push(`/${locale}/admin/login`);
    };

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-72 bg-[#050505] border-r border-white/5 z-[100] flex flex-col pt-8">
            <div className="px-8 mb-12">
                <Logo lang={locale} className="h-10" variant="full" />
                <div className="mt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-600">Admin Panel v2.0</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                <p className="px-4 text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 mb-4">Əsas Menyü</p>
                {menuItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        active={pathname === item.href || (item.href !== `/${locale}/admin` && pathname.startsWith(item.href))}
                        count={item.count}
                    />
                ))}

                <div className="pt-8 space-y-2">
                    <p className="px-4 text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 mb-4">Sistem</p>
                    <NavItem href={`/${locale}/admin/settings`} icon={Settings} label="Tənzimləmələr" active={pathname.includes('/settings')} />
                    <NavItem href={`/${locale}/admin/database`} icon={Database} label="Databaza" active={pathname.includes('/database')} />
                </div>
            </nav>

            <div className="p-4 mt-auto">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-xs font-black">
                            S
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-white uppercase tracking-wider">Samir M.</p>
                            <p className="text-[8px] text-gray-500 uppercase tracking-widest">Baş Redaktor</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all text-[9px] font-black uppercase tracking-[0.2em]"
                    >
                        <LogOut size={12} /> Çıxış et
                    </button>
                </div>
            </div>
        </aside>
    );
};
