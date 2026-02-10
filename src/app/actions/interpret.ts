'use server';

export async function interpretDream(query: string, lang: string) {
    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
        throw new Error('DeepSeek API key is missing');
    }

    const languageName = lang === 'az' ? 'Azerbaijani' : lang === 'tr' ? 'Turkish' : 'English';

    const systemPrompt = `Sən professional yuxu yozma mütəxəssisisən.
    
    QAYDALAR:
    1. YALNIZ yuxular haqqında verilən sualları cavabla. Əgər sual yuxu ilə bağlı deyilsə və ya mənasızdırsa, MÜTLƏQ cavabın ilk sözü olaraq "ERROR: REDUX_DREAM_ONLY" yaz və nəzakətlə izah et ki, sən yalnız yuxu analizi üçün proqramlaşdırılmısan.
    2. Cavabın uzunluğu MAXIMUM 40-50 söz olsun. Qısa, konkret və dərin mənalı cavab ver.
    3. MƏTNİ SADO (PLAIN TEXT) FORMATDA VER. Heç bir Markdown (**), (#), (##) və ya digər formatlaşdırma simvollarından istifadə etmə. Bold və ya başlıq yazma.
    4. Cavab dili mütləq ${languageName} olsun.
    5. Cavab yuxunun simvolik və psixoloji tərəfini bir neçə cümlə ilə ifadə etməlidir.`;

    const prompt = `Yuxunu yoz: "${query}"
    Dil: ${languageName}
    Limit: Maksimum 50 söz.
    Format: Sadə mətn (HEÇ BİR MARKDOWN OLMASIN).`;

    try {
        const response = await fetch("https://api.deepseek.com/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "model": "deepseek-chat",
                "messages": [
                    { "role": "system", "content": systemPrompt },
                    { "role": "user", "content": prompt }
                ],
                "temperature": 0.5,
                "max_tokens": 150
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("DeepSeek API Error:", data);
            return "Xəta: Hazırda yozma mümkün deyil.";
        }

        let content = data.choices?.[0]?.message?.content || "";

        // Clean up any stray markdown just in case
        content = content.replace(/[#*`]/g, '');

        if (content.includes("REDUX_DREAM_ONLY")) {
            return "ERROR_TYPE_DREAM: Bağışlayın, mən yalnız yuxuları yozmaq üçün ixtisaslaşmışam. Zəhmət olmasa yuxunuz haqqında məlumat yazın.";
        }

        return content.trim();
    } catch (error) {
        console.error("DeepSeek Error:", error);
        return "Bağışlayın, hazırda yuxunuzu yoza bilmirəm.";
    }
}
