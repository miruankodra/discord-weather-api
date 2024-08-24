import {Client, GatewayIntentBits} from 'discord.js';
import {WeatherApiService} from './services/weather-api.service.js';
import 'dotenv/config'

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const weatherApiService = new WeatherApiService();

weatherApiService.getWeather();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_BOT_TOKEN);