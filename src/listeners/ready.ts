import { Client, Events } from "discord.js";
import { Commands } from "../Commands";

export default (client : Client) => {
    client.once(Events.ClientReady, async (c) => {
        console.log(`Ovni has started.  Logged in as ${c.user.tag}`);

        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        console.log("Slash commands registered.");
    });
};