import https from 'https';
import 'dotenv/config';
import {WeatherDto} from "../models/weather-dto.js";

export class WeatherApiService {
    weatherDto: WeatherDto = {} as WeatherDto;

    async getWeather(): Promise<WeatherDto> {
        https.get(process.env.API_URL, (res) => {
            let data = '';

            res.on('data', (d) => {
                data += d
            })

            res.on('end', () => {
                try {
                    this.weatherDto = JSON.parse(data);
                    console.log(this.weatherDto);
                    return this.weatherDto;
                }
                catch (e) {
                    console.log(e)
                }
            })

            res.on('error', (error) => {
                console.error(error);
            })
        });

        return this.weatherDto;
    }
}