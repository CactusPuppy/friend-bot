import "@std/dotenv/load";
import "./client.ts";
import { client } from "./client.ts";

// console.log(Deno.env.get("DISCORD_BOT_TOKEN"));
await client.login(Deno.env.get("DISCORD_BOT_TOKEN"));
