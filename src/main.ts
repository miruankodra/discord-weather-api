import { client } from "./configs/Bot.js";
import discordBotGuard from "./guards/discord-bot.guard.js";
import {WeatherApiService} from './services/weather-api.service.js';
import 'dotenv/config'
import {WeatherDto} from "./models/weather-dto.js";


discordBotGuard(client);

const weatherApiService = new WeatherApiService();

const weatherData: WeatherDto = await weatherApiService.getWeather();



