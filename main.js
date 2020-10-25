// setup

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const prefix = '!';

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('friday is online');
    client.user.setActivity(`${prefix}friday :D`);
});

// commands

client.on('message', msg =>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
 
    const args = msg.content.slice((prefix).length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    switch(command){
        case 'friday':
            client.commands.get('friday').execute(msg, args);
            break;
        case 'ping':
            client.commands.get('ping').execute(msg, args);
            break;              
    }
})

// token login

client.login('paste token inside apostrophes'); // token goes here