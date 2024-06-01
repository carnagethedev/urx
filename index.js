require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, Embed, Role, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
  client.user.setActivity({
    name: 'CarnageTheDev',
    type: ActivityType.Listening,

  });
});


client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'serverip') {
    return interaction.reply('Hey! Here is our Minecraft Servers IP **evolvesmp.aternos.me:43144**');
  }

  if (interaction.commandName === 'test') {
    return interaction.reply('I am working brotha!');
  }

  if (interaction.commandName === 'embedtest') {
    const embed = new EmbedBuilder().setTitle('This is an Test Embed!').setDescription('This is a bot in testing period!').setColor('DarkGold').setFooter({ text: 'Being Made by CarnageTheDev!'}).setThumbnail('https://media.discordapp.net/attachments/969277205341437993/1245982072946950204/sC7ZNmA.png?ex=665b637b&is=665a11fb&hm=7306e92bf14702f39bcaa2532ddbc2a554e115fc26adfeb13354a0f251947b7f&=&format=webp&quality=lossless&width=437&height=437');
    
    
    interaction.reply ({  embeds: [embed] 
    });
  }
});

client.on('interactionCreate', async (interaction) => {
try {
  if (!interaction.isButton()) return;
  await interaction.deferReply({ ephemeral: true });


  const role = interaction.guild.roles.cache.get(interaction.customId);
  if(!role) {
    interaction.editReply({
       content: "I Couldnt Find That Role",
      
    })
    return;
  }
  const hasRole = interaction.member.roles.cache.has(role.id)

  if (hasRole) {
    await interaction.member.roles.remove(role);
    await interaction.editReply(`The Role ${role} has been removed!`);
    return;
  }
await interaction.member.roles.add(role);
await interaction.editReply(`The Role ${role} has been added!`);
} catch (error) {
  console.log(error)
}

})



client.login(process.env.TOKEN);