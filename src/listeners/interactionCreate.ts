import { Client, CommandInteraction, Events, Interaction, SlashCommandAssertions } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client) : void => {
    client.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleCommand(client, interaction);
        }
    });
};

const handleCommand = async (client: Client, interaction: CommandInteraction) => {
    const command = Commands.find(c => c.name === interaction.commandName);
    if (!command) {
        interaction.followUp({ content: "Error: command not found" });
        return;
    }

    await interaction.deferReply();
    command.run(client, interaction);
};
