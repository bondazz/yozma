'use server';

import { getAllDreams, getDreamBySlug, saveDreamPost, deleteDreamPost, DreamPost, saveDreamPostsBatch } from '@/lib/dream-storage';
import { revalidatePath } from 'next/cache';

export async function adminGetAllPosts(lang: string) {
    return await getAllDreams(lang);
}

export async function adminGetPost(slug: string, lang: string) {
    return await getDreamBySlug(slug, lang);
}

export async function adminUpdatePost(post: DreamPost) {
    await saveDreamPost(post);
    revalidatePath(`/${post.lang}/yuxu-yozmalari/${post.slug}`);
    revalidatePath(`/${post.lang}/admin/posts`);
    return { success: true };
}

export async function adminDeletePost(slug: string, lang: string) {
    const success = await deleteDreamPost(slug, lang);
    revalidatePath(`/${lang}/admin/posts`);
    return { success };
}
export async function adminBatchCreatePosts(posts: DreamPost[]) {
    await saveDreamPostsBatch(posts);
    if (posts.length > 0) {
        revalidatePath(`/${posts[0].lang}/admin/posts`);
    }
    return { success: true };
}
