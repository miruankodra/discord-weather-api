import OpenAI from "openai";
import 'dotenv/config';
export class OpenaiService {
    constructor() {
        this._openAiApi = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            baseURL: process.env.AI_BASE_URL
        });
    }
    async promptChatMessage(userMessage) {
        const response = await this._openAiApi.chat.completions.create({
            model: "{{llmModel}}",
            messages: [
                {
                    "role": "system",
                    "content": process.env.OPENAI_SYSTEM_MESSAGE
                },
                {
                    "role": "user",
                    "content": userMessage
                }
            ],
            max_tokens: 512,
            stream: true,
        });
        console.log(response);
    }
}
//# sourceMappingURL=openai.service.js.map