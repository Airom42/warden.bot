const db = require("../../db/index");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`endevent`)
    .setDescription(`Delete an event"`)
    .addStringOption(option => option.setName('id')
		.setDescription('ID of the Event to delete, provided when the event is made.')
		.setRequired(true)),
    usage: '"event ID"',
    args: true,
    permlvl: 1, // 0 = Everyone, 1 = Mentor, 2 = Staff
    hidden: false,
    async execute (interaction) {
        try {   
            await db.query("DELETE FROM events WHERE event_id = $1", [interaction.options.data.find(arg => arg.name === 'id').value])
            interaction.reply({ content: "Event Deleted ‼"})
        } catch {
            interaction.reply({ content: "Sorry, could not delete the event, please contact staff."})
        }
    }
}