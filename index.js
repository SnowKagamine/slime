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

bot.login(NjMxNjIwNTI0OTc5NTE5NDk4.XZ5wDA.HVjF7rj1a5kiV_mTHISRUezQgFs)
