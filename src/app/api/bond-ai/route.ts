import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { dream, locale, slug, name: reqName, surname: reqSurname } = await req.json();

        if (!dream) {
            return NextResponse.json({ error: 'Dream is required' }, { status: 400 });
        }

        const apiKey = process.env.DEEPSEEK_API_KEY;
        if (!apiKey) {
            console.error('DEEPSEEK_API_KEY is not set');
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }

        // Prompt engineering based on user requirements
        const systemPrompt = `
You are Bond AI, a professional dream interpretation assistant.
Your goal is to provide deep, meaningful, and psychological/symbolic analyses of dreams.

STRICT RULES:
1. ONLY answer questions related to dreams and their meanings.
2. If the prompt is NOT about a dream, answer strictly with: "ERROR: ONLY_DREAMS".
3. Your response MUST be a maximum of 50 words.
4. DO NOT include any external links, websites, or source references.
5. Answer in the same language as the user's dream (detected language or ${locale}).
6. Be empathetic, professional, and mystical in your tone.
`;

        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: dream }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('DeepSeek API error:', errorData);
            return NextResponse.json({ error: 'AI service unavailable' }, { status: 500 });
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content.trim();

        // Safety check if AI tried to go outside boundaries
        if (aiMessage.includes('ERROR: ONLY_DREAMS')) {
            return NextResponse.json({ error: 'ONLY_DREAMS' }, { status: 400 });
        }

        // Save to global history for SEO (CTRL+U visibility)
        const { saveBondInteraction } = await import('@/lib/bond-storage');

        saveBondInteraction({
            id: Math.random().toString(36).substr(2, 9),
            userName: reqName || 'User',
            userSurname: reqSurname || '',
            question: dream,
            answer: aiMessage,
            timestamp: Date.now(),
            locale,
            slug: slug || 'archive'
        });

        return NextResponse.json({ answer: aiMessage });

    } catch (error) {
        console.error('Bond AI Route Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
