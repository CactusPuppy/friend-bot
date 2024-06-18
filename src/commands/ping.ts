import { Command, ChatInputCommand } from '@sapphire/framework';
import { isMessageInstance } from "@sapphire/discord.js-utilities";

export class PingCommand extends Command {
  public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName("ping")
        .setDescription("Ping the bot to see if it's alive"),
      { idHints: ["1252491054830194789"], guildIds: ["407385931687919616"] }
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    const msg = await interaction.reply({ content: 'Ping?', ephemeral: true, fetchReply: true });

    if (isMessageInstance(msg)) {
      const diff = msg.createdTimestamp - interaction.createdTimestamp;
      const ping = Math.ceil(this.container.client.ws.ping);
      return interaction.editReply(`Pong 🏓! Round trip took ${diff}ms. Heartbeat 💓 ${ping}ms.)`);
    }

    return interaction.editReply("Failed to retrieve ping :(");
  }
}
