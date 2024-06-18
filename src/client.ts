import { SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

export const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  loadMessageCommandListeners: true
});
