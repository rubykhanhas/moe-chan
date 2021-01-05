const ytdl = require("ytdl-core");
const { PREFIX } = require("../constants");

module.exports = {
    name: "audio",
    description: "playing audio",
    async exec(msg, args) {
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.channel.send("You need to be in a voice channel to run this command");
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has("CONNECT")) return msg.channel.send("You don't have permission to connect");
        if (!permissions.has("SPEAK")) return msg.channel.send("You don't have permission to play");
        if(args[0] != "play" && args[0] != "stop")
            msg.channel.send(`${PREFIX + this.name} play <youtube url> <volume (0.0 -> 1)>\n ${PREFIX + this.name} stop`);

        try {
            const connection = await voiceChannel.join();
            if (args[0] === "play"){
                const dispatcher = connection
                    .play(ytdl(args[1]))
                    .on("finish", () => voiceChannel.leave())
                    .on("error", (errs) => msg.channel.send(`Playing error: ${errs}`));
                dispatcher.setVolumeLogarithmic(args[2] || 1);
            }
            if (args[0] === "stop") msg.member.voice.channel.leave();
        } catch (err) {
            msg.channel.send(`Connecting error: ${err}`);
        }
    },
};
