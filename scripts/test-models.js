const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    try {
        // We use a dummy model call to see if we can trigger the SDK to list or just try common ones
        console.log("Listing available models for your API key...");
        // The listModels method is available on the genAI object in some versions or via the REST API
        // But let's try a more direct approach by testing 1.5-flash, 1.0-pro etc.
        const testModels = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"];

        for (const m of testModels) {
            try {
                const model = genAI.getGenerativeModel({ model: m });
                await model.generateContent("test");
                console.log(`✅ Model [${m}] is WORKING.`);
            } catch (e) {
                console.log(`❌ Model [${m}] failed: ${e.message}`);
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

listModels();
