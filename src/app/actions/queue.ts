'use server';

import fs from 'fs/promises';
import path from 'path';

const QUEUE_FILE = path.join(process.cwd(), 'src/data/admin/queue.json');
const DICTIONARY_FILE = path.join(process.cwd(), 'src/data/dictionary/az.json');

export async function saveQueue(items: string[]) {
    try {
        await fs.mkdir(path.dirname(QUEUE_FILE), { recursive: true });
        await fs.writeFile(QUEUE_FILE, JSON.stringify(items, null, 2), 'utf-8');
        return { success: true };
    } catch (error) {
        console.error('Failed to save queue:', error);
        return { success: false, error: String(error) };
    }
}

export async function getQueue(): Promise<string[]> {
    try {
        const data = await fs.readFile(QUEUE_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

export async function getDictionaryAZ(): Promise<Record<string, string[]>> {
    try {
        const data = await fs.readFile(DICTIONARY_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (e) {
        return {};
    }
}
