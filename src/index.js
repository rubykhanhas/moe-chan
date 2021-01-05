const {Client, Collection} = require('discord.js');
const { TOKEN } = require('./constants');
const { initCommands, checkCommand } = require('./utils');

//#region Init
const MyBot = new Client();
MyBot.CMDS = new Collection();
initCommands(MyBot.CMDS);
MyBot.login(TOKEN);
MyBot.once('ready', () => console.log("BOT IS READY"));
//#endregion

MyBot.on('message', msg => {
    const {command, args, isSuccess} = checkCommand(msg);
    if(isSuccess && MyBot.CMDS.get(command))    
        MyBot.CMDS.get(command).exec(msg, args);
})