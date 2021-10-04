const Discord = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
	.setName('roleinfo')
	.setDescription('Get information about a role')
  .addRoleOption(option => option.setName('role')
		.setDescription('The role to target')
		.setRequired(true)),
	permissions: 0,
	execute(interaction) {
		try {
      let roleID = interaction.options.data.find(arg => arg.name === 'role').value
      let role = interaction.guild.roles.cache.get(roleID)
      console.log(role)

      const returnEmbed = new Discord.MessageEmbed()
      .setColor('#FF7100')
      .setAuthor('The Anti-Xeno Initiative', "https://cdn.discordapp.com/attachments/860453324959645726/865330887213842482/AXI_Insignia_Hypen_512.png")
      .setTitle(`**Role Info - ${role.name}**`)
      .setDescription(`Role information for ${role}`)
      .addFields(
        {name: "Name", value: "```" + role.name + "```", inline: true},
        {name: "ID", value: "```" + roleID + "```", inline: true},
        {name: "Total Members", value: "```" + role.members.size + "```", inline: true},
        {name: "Color", value: "```" + role.hexColor + "```", inline: true},
        {name: "Position", value: "```" + role.rawPosition + "```", inline: true},
        {name: "Created", value: "```" + role.createdAt + "```", inline: true},
      )
      interaction.reply({ embeds: [returnEmbed.setTimestamp()] });

    }
      catch(err) {
        console.error(err);
        interaction.reply({ content: `Something went wrong, please try again!` })
      }
	},
};
