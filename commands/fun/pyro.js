const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(`pyro`)
    .setDescription(`Summons the mythical Fire Chicken`),
    permissions: 0,
    execute (interaction) {
        interaction.reply({ content: `<@86435015272960000> rises from the ashes... You summon the mythical Fire Chicken!` });
        interaction.channel.send({ content: "https://media.discordapp.net/attachments/811555814748848148/1018797731596214282/unknown.png?width=656&height=433" });
    }
}
