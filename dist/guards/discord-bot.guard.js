import { Events } from 'discord.js';
import 'dotenv/config';
export default function discordBotGuard(client) {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}`);
    });
    client.login(process.env.DISCORD_BOT_TOKEN);
    client.on(Events.MessageCreate, (message) => {
        if (message.author.bot)
            return;
        message.channel.send('For the moment I\'m not able to reply to you properly, but I will be soon!');
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