'use server';

import { getManualDreams, addManualDreams, deleteManualDream } from '@/lib/manual-dream-storage';
import { revalidatePath } from 'next/cache';

export async function adminGetManualDreams(lang: string) {
    return await getManualDreams(lang);
}

export async function adminAddManualDreams(topics: string[], lang: string) {
    await addManualDreams(topics, lang);
    revalidatePath(`/${lang}/admin/manual-dreams`);
    return { success: true };
}

export async function adminDeleteManualDream(id: string, lang: string) {
    await deleteManualDream(id);
    revalidatePath(`/${lang}/admin/manual-dreams`);
    return { success: true };
}
