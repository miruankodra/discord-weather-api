import { Events } from 'discord.js';
import { AiApiService } from "../services/aiApi.service.js";
import 'dotenv/config';
const _openAiService = new AiApiService();
export default function discordBotGuard(client) {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`);
    });
    client.login(process.env.DISCORD_BOT_TOKEN);
    client.on(Events.MessageCreate, (message) => {
        if (message.author.bot)
            return;
        const reply = _openAiService.promptChatMessage(message.content);
        reply.then((res) => {
            const messageObj = JSON.parse(res.toString());
            message.channel.send(messageObj.result);
        });
    });
    client.on(Events.PresenceUpdate, (oldPresence, newPresence) => {
        const oldStatus = oldPresence.status || 'offline';
        const newStatus = newPresence.status;
        if (oldStatus === 'offline' && newStatus === 'online') {
            // const username = newPresence.user.username;
            // client.channels.fetch('1277328910601949348').then( (channel: TextChannel) => {
            //     channel.send(`Hello ${username}!\n Welcome back!`)
            // } )
        }
    });
}
//# sourceMappingURL=discord-bot.guard.js.map