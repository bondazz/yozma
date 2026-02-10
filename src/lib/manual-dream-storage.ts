import { supabaseAdmin } from './supabase';

export interface ManualDream {
    id: string;
    topic: string;
    lang: string;
    created_at: string;
}

export async function getManualDreams(lang: string): Promise<ManualDream[]> {
    const { data, error } = await supabaseAdmin
        .from('manual_dreams')
        .select('*')
        .eq('lang', lang)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching manual dreams:', error);
        return [];
    }

    return data || [];
}

export async function addManualDreams(topics: string[], lang: string) {
    const rows = topics.map(topic => ({
        topic: topic.trim(),
        lang: lang
    })).filter(row => row.topic.length > 0);

    if (rows.length === 0) return { success: true };

    const { error } = await supabaseAdmin
        .from('manual_dreams')
        .insert(rows);

    if (error) throw error;
    return { success: true };
}

export async function deleteManualDream(id: string) {
    const { error } = await supabaseAdmin
        .from('manual_dreams')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return { success: true };
}

export async function deleteManualDreamsByTopics(topics: string[], lang: string) {
    const { error } = await supabaseAdmin
        .from('manual_dreams')
        .delete()
        .eq('lang', lang)
        .in('topic', topics);

    if (error) throw error;
    return { success: true };
}
