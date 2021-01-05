require('dotenv').config();
const path = require('path')

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;
const COMMANDS_DIR = path.resolve(__dirname, 'commands');

module.exports = {TOKEN, PREFIX, COMMANDS_DIR};