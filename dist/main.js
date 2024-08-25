import { client } from "./configs/Bot.js";
import discordBotGuard from "./guards/discord-bot.guard.js";
import { WeatherApiService } from './services/weather-api.service.js';
import 'dotenv/config';
discordBotGuard(client);
const weatherApiService = new WeatherApiService();
const weatherData = await weatherApiService.getWeather();
//# sourceMappingURL=main.js.map