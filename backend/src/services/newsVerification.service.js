import dotenv from 'dotenv';
dotenv.config();
// console.log(process.env.OPENROUTER_API_KEY)
export async function checkNewsVerification(content) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173", // Or your frontend domain
                "X-Title": "News Verifier"
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1:free",
                messages: [
                    {
                      "role": "user",
                      "content": content
                    }
                  ]
            })
        });

        const data = await response.json();
        const result = data?.choices?.[0]?.message?.content;

        if (!result) throw new Error('Invalid response format from OpenRouter');
        return { success: true, message: result };
    } catch (err) {
        console.error('Error verifying news:', err.message || err);
        throw err;
    }
}
