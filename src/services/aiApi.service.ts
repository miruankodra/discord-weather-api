import 'dotenv/config';
import {HttpOptionsDto} from "../models/http-options-dto.js";
import http from "https";
import {AiResponse} from "../models/ai-response.js";

export class AiApiService {

    public options: HttpOptionsDto = {
        method: 'POST',
        hostname: 'open-ai21.p.rapidapi.com',
        port: null,
        path: '/chatgpt',
        headers: {
            'x-rapidapi-key': '3f24e5e955msh532cafc88e96637p15222bjsn03604d223979',
            'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    async promptChatMessage (userMessage: string) {
        return new Promise((resolve, reject) => {
            const req = http.request(this.options, function (res) {
                const chunks = [];

                res.on('data', function (chunk) {
                    chunks.push(chunk);
                });

                res.on('end', function () {
                    const body = Buffer.concat(chunks);
                    console.log(body.toString());
                    // const response: AiResponse = body.toString() as AiResponse
                    resolve(body.toString());
                });
            });

            req.write(JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content: process.env.OPENAI_SYSTEM_MESSAGE
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                web_access: false
            }));
            req.end();
        })

    }

}


