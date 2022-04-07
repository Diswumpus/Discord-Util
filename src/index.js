const Discord = require('discord.js');

module.exports = {
    pages: require("./classes/pages"),
    timestamp: require("./classes/timestamp"),
    ContextMenuBuilder: require("./classes/contextMenuBuilder"),
    autoSplitPages: require("./functions/autoSplitPapges"),
    embedMeme: require("./functions/embedMeme"),
    fetchMeme: require("./functions/fetchMeme"),
    fetchDjsDocs: require("./functions/fetchDjsDocs"),
    formatButtons: require("./functions/formatButtons"),
    toDiscordColor: require("./functions/toDiscordColor")
};