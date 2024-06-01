require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, Embed, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
    {
         id: '928165749820887100',
         label: 'Cyan'
    },
    {
        id: '928165752740122634',
        label: 'Green'
   },
   {
    id: '928165759371317279',
    label: 'Black'
   },
   {
    id: '928165757039308860',
    label: 'Yellow'
   },
   {
    id: '928165755193794561',
    label:'Red'
   }
]




client.on('ready', async (c) => {
   try {
    const channel = await client.channels.cache.get('1246283195624718367');
    if (!channel) return;

const row = new ActionRowBuilder();

roles.forEach((role) => {
    row.components.push(
        new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
    )
})
await channel.send({

    content: 'Claim or Remove a role below!',
    components  : [row],

});
process.exit()

   } catch (error) {
    console.log(error);
    
   }
  });
  client.login(process.env.TOKEN);