const { initCommands } = require("../utils");

module.exports = {
    name: 'help',
    description: 'help command',
    exec(msg, ...args){
        msg.channel.send(`${initCommands()}`);
    }
}