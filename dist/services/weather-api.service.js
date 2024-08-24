import https from 'https';
import 'dotenv/config';
export class WeatherApiService {
    constructor() {
        this.weatherDto = {};
    }
    async getWeather() {
        https.get(process.env.API_URL, (res) => {
            let data = '';
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', () => {
                try {
                    this.weatherDto = JSON.parse(data);
                    console.log(this.weatherDto);
                    return this.weatherDto;
                }
                catch (e) {
                    console.log(e);
                }
            });
            res.on('error', (error) => {
                console.error(error);
            });
        });
        return this.weatherDto;
    }
}
//# sourceMappingURL=weather-api.service.js.map