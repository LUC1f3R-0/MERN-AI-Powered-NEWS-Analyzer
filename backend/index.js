import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import promptBuilder from './src/services/prompt.service.js';
import { checkNewsVerification } from './src/services/newsVerification.service.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.post('/news-check', async (request, response) => {
    const { content } = request.body;
    try {
        if (!content || content.trim() === '') { return response.status(400).json({ error: 'Content must not be empty' }) }

        const prompt = await promptBuilder(content)
        const result = await checkNewsVerification(prompt);
        response.status(200).json({ success: true, message: '', data: result });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Failed to verify news content' });
    }
});
app.listen(8080, () => console.log('Server running on http://localhost:8080'));