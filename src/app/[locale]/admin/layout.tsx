'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AdminSidebar } from '@/components/sections/AdminSidebar';
import { cn } from '@/lib/utils';

export default function AdminLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname.includes('/admin/login');
    const [locale, setLocale] = React.useState('az');

    React.useEffect(() => {
        params.then(p => setLocale(p.locale));
    }, [params]);

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar Sticky - Only show if not login page */}
            {!isLoginPage && <AdminSidebar locale={locale} />}

            {/* Main Content Area */}
            <main className={cn(
                "flex-1 min-h-screen relative transition-all duration-300",
                !isLoginPage ? "ml-72" : "ml-0"
            )}>
                <div className={cn(
                    "relative",
                    !isLoginPage ? "p-10" : "p-0"
                )}>
                    {children}
                </div>
            </main>
        </div>
    );
}
