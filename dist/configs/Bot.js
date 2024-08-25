import { Client, GatewayIntentBits } from "discord.js";
export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        'DirectMessages',
        'GuildMessages',
        'MessageContent',
        'GuildPresences'
    ]
});
//# sourceMappingURL=Bot.js.map