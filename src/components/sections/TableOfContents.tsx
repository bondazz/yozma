'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { PlusIcon } from 'lucide-react';

export function TableOfContents({ sticky = true }: { sticky?: boolean }) {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('h2, h3'))
            .map((elem) => {
                const id = elem.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
                elem.id = id;
                return {
                    id,
                    text: elem.textContent || '',
                    level: Number(elem.tagName.replace('H', ''))
                };
            });
        setHeadings(elements);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-10% 0% -70% 0%' }
        );

        elements.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) return null;

    return (
        <nav className={`p-8 rounded-3xl bg-black border border-white/10 relative overflow-hidden group ${sticky ? '' : 'mb-8'}`}>
            <PlusIcon className="absolute -top-3 -left-3 size-5.5 text-white/20" />
            <PlusIcon className="absolute -top-3 -right-3 size-5.5 text-white/20" />
            <PlusIcon className="absolute -bottom-3 -left-3 size-5.5 text-white/20" />
            <PlusIcon className="absolute -bottom-3 -right-3 size-5.5 text-white/20" />

            <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-8">Mündəricat</h4>
            <ul className="space-y-4">
                {headings.map((h) => (
                    <li
                        key={h.id}
                        className="relative"
                        style={{ paddingLeft: h.level === 3 ? '1.25rem' : '0' }}
                    >
                        {activeId === h.id && (
                            <motion.div
                                layoutId="toc-active"
                                className="absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-3 bg-blue-500 rounded-full"
                            />
                        )}
                        <a
                            href={`#${h.id}`}
                            className={`text-[11px] font-bold transition-all duration-300 block leading-tight tracking-wide ${activeId === h.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(h.id);
                                if (element) {
                                    const headerOffset = 100;
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: "smooth"
                                    });
                                    window.history.pushState(null, '', `#${h.id}`);
                                }
                            }}
                        >
                            {h.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
