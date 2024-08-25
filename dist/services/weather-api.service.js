import https from 'https';
import 'dotenv/config';
export class WeatherApiService {
    constructor() {
        this.weatherDto = {};
    }
    async getWeather() {
        return new Promise((resolve, reject) => {
            https.get(process.env.API_URL, (res) => {
                let data = '';
                res.on('data', (d) => {
                    data += d;
                });
                res.on('end', () => {
                    try {
                        const parsedData = JSON.parse(data);
                        // console.log(parsedData);
                        resolve(parsedData);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                res.on('error', (error) => {
                    reject(error);
                });
            });
        });
    }
}
//# sourceMappingURL=weather-api.service.js.map