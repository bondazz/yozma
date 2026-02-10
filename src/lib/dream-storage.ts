import { supabaseAdmin } from './supabase';

export interface DreamPost {
    slug: string;
    title: string;
    excerpt: string;
    highlightBox: string;
    content: string;
    category: string;
    date: string;
    lang: string;
    seoTitle: string;
    seoDescription: string;
    keywords: string;
    ogImage?: string;
    ratingValue: number;
    reviewCount: number;
    video?: {
        url: string;
        title: string;
        thumbnailUrl: string;
        uploadDate: string;
    };
    faqs: { question: string; answer: string }[];
    relatedSlugs: string[];
}

const getTableName = (lang: string) => {
    if (lang === 'tr') return 'dreams_tr';
    if (lang === 'en') return 'dreams_en';
    return 'dreams';
};

export async function saveDreamPost(post: DreamPost) {
    const { data, error } = await supabaseAdmin
        .from(getTableName(post.lang))
        .upsert({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            highlight_box: post.highlightBox || '',
            content: post.content,
            category: post.category,
            date: post.date,
            lang: post.lang,
            seo_title: post.seoTitle,
            seo_description: post.seoDescription,
            keywords: post.keywords,
            og_image: post.ogImage,
            rating_value: post.ratingValue,
            review_count: post.reviewCount,
            video: post.video,
            faqs: post.faqs,
            related_slugs: post.relatedSlugs
        });

    if (error) throw error;
    return data;
}

export async function saveDreamPostsBatch(posts: DreamPost[]) {
    if (posts.length === 0) return { success: true };

    // Group by language since they go to different tables
    const groups: Record<string, DreamPost[]> = {};
    posts.forEach(post => {
        if (!groups[post.lang]) groups[post.lang] = [];
        groups[post.lang].push(post);
    });

    for (const [lang, langPosts] of Object.entries(groups)) {
        const rows = langPosts.map(post => ({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            highlight_box: post.highlightBox || '',
            content: post.content,
            category: post.category,
            date: post.date,
            lang: post.lang,
            seo_title: post.seoTitle,
            seo_description: post.seoDescription,
            keywords: post.keywords,
            og_image: post.ogImage,
            rating_value: post.ratingValue,
            review_count: post.reviewCount,
            video: post.video,
            faqs: post.faqs,
            related_slugs: post.relatedSlugs
        }));

        const { error } = await supabaseAdmin
            .from(getTableName(lang))
            .upsert(rows);

        if (error) throw error;
    }

    return { success: true };
}

export async function getAllDreams(lang: string): Promise<DreamPost[]> {
    const { data, error } = await supabaseAdmin
        .from(getTableName(lang))
        .select('*')
        .order('date', { ascending: false });

    if (error) {
        console.error('Error fetching dreams:', error);
        return [];
    }

    return (data || []).map(mapDbToDream);
}

export async function getRandomDreams(lang: string, limit: number = 12): Promise<DreamPost[]> {
    // Note: Standard Supabase doesn't have a direct 'order by random' without RPC.
    // We will fetch a pool and shuffle it on the server.
    const { data, error } = await supabaseAdmin
        .from(getTableName(lang))
        .select('*')
        .limit(100); // Fetch a pool of 100 recent dreams to randomize from

    if (error) {
        console.error('Error fetching random dreams:', error);
        return [];
    }

    const shuffled = (data || [])
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);

    return shuffled.map(mapDbToDream);
}

export async function getDreamBySlug(slug: string, lang: string): Promise<DreamPost | null> {
    const { data, error } = await supabaseAdmin
        .from(getTableName(lang))
        .select('*')
        .eq('slug', slug)
        .single();

    if (error || !data) return null;

    return mapDbToDream(data);
}

export async function deleteDreamPost(slug: string, lang: string) {
    const { error } = await supabaseAdmin
        .from(getTableName(lang))
        .delete()
        .eq('slug', slug);

    return !error;
}

function mapDbToDream(dbRow: any): DreamPost {
    return {
        slug: dbRow.slug,
        title: dbRow.title,
        excerpt: dbRow.excerpt,
        highlightBox: dbRow.highlight_box,
        content: dbRow.content,
        category: dbRow.category,
        date: dbRow.date,
        lang: dbRow.lang,
        seoTitle: dbRow.seo_title,
        seoDescription: dbRow.seo_description,
        keywords: dbRow.keywords,
        ogImage: dbRow.og_image,
        ratingValue: dbRow.rating_value,
        reviewCount: dbRow.review_count,
        video: dbRow.video,
        faqs: dbRow.faqs,
        relatedSlugs: dbRow.related_slugs
    };
}
