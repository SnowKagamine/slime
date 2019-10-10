const Discord = require("discord.js");
const bot = new Discord.Client();
var token='bot.login(config.token)';
bot.on('ready',()=> {
    console.log(`Bot logging at discord ${bot.user.tag}!`);
});

bot.on('message' , msg => {
    if(msg.content ==='ping'){
        msg.reply("Pong!");


    }
});

bot.login(token)
