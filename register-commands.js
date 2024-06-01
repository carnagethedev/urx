require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'serverip',
    description: 'Gives You Our Minecraft Servers IP!',
  },
  {
    name: 'test',
    description: 'Test if the bot is working!',
  },
  {
    name: 'embedtest',
    description:'This is a command to test the embeds!',
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();