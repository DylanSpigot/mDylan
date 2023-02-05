import * as discordJs from 'discord.js';
import deploy from '../deploy_commands.js';
import { client, logJoinedGuildCount } from '../index.js';

export const event = discordJs.Events.ClientReady;
export const once = true;

export async function execute(): Promise<void> {
    if (client.user) {
        console.log(`Successfully logged in as ${client.user.tag}`);
        client.user.setActivity('Minecraft servers', { type: discordJs.ActivityType.Watching });
        logJoinedGuildCount();
    }
    deploy();
}
