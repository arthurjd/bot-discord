// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login('TOKEN');



/*
  // Função que verifica se o usuário está jogando
  async function checkActivity(userId, channelId, textChannelId) {
    const guild = client.guilds.cache.first(); // Substitua isso para buscar a guilda correta se seu bot estiver em várias guildas
    const member = await guild.members.fetch(userId);
    const voiceChannel = guild.channels.cache.get(channelId);

    if (member.voice.channel && member.voice.channel.id === voiceChannel.id) {
      member.presence.activities.forEach((activity) => {
        if (activity.type === 'PLAYING') {
          const textChannel = guild.channels.cache.get(textChannelId);
          textChannel.send(`${member.user.tag} está jogando ${activity.name}`);
        }
      });
    }
  }

  // Substitua esses IDs pelos IDs corretos
  const userId = '1112873336805015593';
  const voiceChannelId = '1112873779270525012';
  const textChannelId = '1112873779270525011';

  // Verificar a atividade do usuário a cada minuto (60000 milissegundos)
  setInterval(() => checkActivity(userId, voiceChannelId, textChannelId), 60000);

  client.login('TOKEN'); // Substitua 'SEU_TOKEN' pelo token do seu bot
*/