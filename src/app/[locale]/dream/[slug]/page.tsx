import { getDreamBySlug } from '@/lib/dream-storage';
import { notFound } from 'next/navigation';
import { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'framer-motion';

export default async function DreamPage(props: { params: Promise<{ locale: Locale, slug: string }> }) {
    const params = await props.params;
    const { locale, slug } = params;
    const dream = await getDreamBySlug(slug, locale);
    const dict = await getDictionary(locale);

    if (!dream) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="mb-12">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                        {dream.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                        {dream.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{new Date(dream.date).toLocaleDateString(locale)}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-700" />
                        <span>Dream Odyssey AI</span>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-p:text-gray-400 prose-headings:text-white prose-strong:text-white prose-blockquote:border-white/20 prose-blockquote:text-gray-300">
                    <div dangerouslySetInnerHTML={{ __html: dream.content.replace(/\n/g, '<br/>') }} />
                </div>
            </div>
            <Footer dict={dict} lang={locale} />
        </main>
    );
}
