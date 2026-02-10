const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function checkModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    try {
        console.log("Checking available models for your API context...");

        // This is the correct listModels call for the JS SDK
        const modelList = await genAI.getGenerativeModel({ model: "gemini-pro" }).listModels();
        // Note: listModels might not be exactly like this in the latest SDK, 
        // sometimes it's better to just try common candidates.
    } catch (e) {
        // If listModels fails, we'll try brute forcing common names
    }

    const candidates = [
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-1.0-pro",
        "gemini-pro"
    ];

    for (const modelName of candidates) {
        try {
            console.log(`Testing model: ${modelName}...`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent("Say 'OK'");
            const response = await result.response;
            console.log(`✅ Model [${modelName}] is ACTIVE. Response: ${response.text()}`);
            process.exit(0); // Exit on first success
        } catch (error) {
            console.log(`❌ Model [${modelName}] failed. Error: ${error.message}`);
        }
    }
}

checkModels();
