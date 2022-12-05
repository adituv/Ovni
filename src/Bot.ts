import { Client, Events } from "discord.js";
import { botToken } from "./config.json";

import onReady from "./listeners/ready";
import onInteractionCreate from "./listeners/interactionCreate";

console.log("Ovni is starting...");

const client = new Client({
    intents: []
});

onReady(client);
onInteractionCreate(client);

client.login(botToken);
