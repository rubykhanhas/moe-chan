const fs = require("fs");
const { COMMANDS_DIR, PREFIX } = require("./constants");

function initCommands(CMDS) {
    const commandFiles = fs.readdirSync(COMMANDS_DIR).filter((fileName) => fileName.endsWith(".js"));
    const commandFilesNoExt = commandFiles.map((fileName) => fileName.slice(0, fileName.length - 3));
    if (CMDS) {
        for (file of commandFilesNoExt) {
            const cmd = require(`${COMMANDS_DIR}/${file}`);
            CMDS.set(cmd.name, cmd);
        }
    }
    return commandFilesNoExt;
}

function checkCommand(msg) {
    if (!msg.content.startsWith(PREFIX) || msg.author.bot) return { isSuccess: false };

    const args = msg.content.slice(PREFIX.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    return { args, command, isSuccess: true };
}

module.exports = { initCommands, checkCommand };
