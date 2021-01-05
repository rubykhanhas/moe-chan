module.exports = {
    name: 'clearchannel',
    description: 'clear chat recent on channel',
    exec(msg, ...args){
        msg.channel.messages.fetch().then(result => {
            msg.channel.bulkDelete(result);
            msg.channel.send("Cleared!");
        });
    }
}