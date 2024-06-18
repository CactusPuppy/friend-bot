import "@std/dotenv/load";

const token = Deno.env.get("DISCORD_BOT_TOKEN");
import { REST } from "@discordjs/rest";
import { Routes, RESTGetAPIApplicationCommandResult } from "discord-api-types/v10";

const clientId = Deno.env.get("DISCORD_CLIENT_ID") ?? "";

const client = new REST({ version: "10" }).setToken(token ?? "");

client.get(Routes.applicationCommands(clientId))
  .then((response) => {
    (response as RESTGetAPIApplicationCommandResult[]).map(async (command) => {
      await client.delete(Routes.applicationCommand(clientId, command.id));
      console.log(`Deleted command: ID ${command.id} "/${command.name}"`);
    })
  });
