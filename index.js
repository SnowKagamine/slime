const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const token = require("./config.json");
bot.on('ready',()=> {
    console.log(`Bot logging at discord ${bot.user.tag}!`);
});

bot.on('message' , msg => {
    if(msg.content ==='ping'){
        msg.reply("Pong!");


    }
});

bot.login(process.env.BOT_TOKEN);
