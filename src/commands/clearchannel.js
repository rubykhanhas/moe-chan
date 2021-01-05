module.exports = {
    name: 'clearchannel',
    description: 'clear chat recent on channel',
    async exec(msg, ...args){
        try {
            msg.channel.messages.fetch().then(result => {
                msg.channel.bulkDelete(result);
                msg.channel.send("Cleared!");
            });
        } catch (err) {
            msg.channel.send(`Clear channel error: ${err}`);
        }
    }
}