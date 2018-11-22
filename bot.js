const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTEzMDQwMDM3MzgyNzE3NDYw.DtfHtw.C_DRzA1Hiz9KqH_2lJoF4-qFbTA);
