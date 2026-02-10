import fs from 'fs';
import path from 'path';

export interface BondInteraction {
    id: string;
    userName: string;
    userSurname: string;
    question: string;
    answer: string;
    timestamp: number;
    locale: string;
    slug: string; // Target page slug
}

const DATA_PATH = path.join(process.cwd(), 'src/data/bond-history.json');

export function getBondHistory(slug?: string): BondInteraction[] {
    try {
        if (!fs.existsSync(DATA_PATH)) return [];
        const content = fs.readFileSync(DATA_PATH, 'utf-8');
        const history: BondInteraction[] = JSON.parse(content);

        if (slug) {
            return history.filter(item => item.slug === slug);
        }
        return history;
    } catch (e) {
        console.error('Error reading bond history:', e);
        return [];
    }
}

export function saveBondInteraction(interaction: BondInteraction) {
    try {
        const history = getBondHistory(); // Get ALL to append
        // Keep only last 500 total interactions for safety
        const updatedHistory = [interaction, ...history].slice(0, 500);
        fs.writeFileSync(DATA_PATH, JSON.stringify(updatedHistory, null, 2), 'utf-8');
    } catch (e) {
        console.error('Error saving bond interaction:', e);
    }
}
