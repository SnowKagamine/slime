const Discord = require("discord.js");
const bot = new Discord.Client();
var token='NjMxNjIwNTI0OTc5NTE5NDk4.XZ5wDA.HVjF7rj1a5kiV_mTHISRUezQgFs';
bot.on('ready',()=> {
    console.log(`Bot logging at discord ${bot.user.tag}!`);
});

bot.on('message' , msg => {
    if(msg.content ==='ping'){
        msg.reply("Pong!");


    }
});

bot.login(token);
