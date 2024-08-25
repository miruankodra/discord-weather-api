import https from 'https';
import 'dotenv/config';
import {WeatherDto} from "../models/weather-dto.js";

export class WeatherApiService {
    weatherDto: WeatherDto = {} as WeatherDto;

    async getWeather(): Promise<WeatherDto> {
        return new Promise<WeatherDto>((resolve, reject) => {
            https.get(process.env.API_URL, (res) => {
                let data = '';

                res.on('data', (d) => {
                    data += d
                })

                res.on('end', () => {
                    try {
                        const parsedData = JSON.parse(data);
                        // console.log(parsedData);
                        resolve(parsedData);
                    }
                    catch (e) {
                        reject(e);
                    }
                })

                res.on('error', (error) => {
                    reject(error);
                })
            });
        })

    }
}