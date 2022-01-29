const Discord = require('discord.js');

module.exports = {
    pages: require('./classes/pages'),
    timestamp: require('./classes/timestamp'),
    ContextMenuBuilder: require('./classes/contextMenuBuilder'),
    ContextMenuBuilderTypes: {
        "MESSAGE": 3,
        "USER": 2,
    },
    //quiz: require('./classes/quiz'),
    ContextMenuBuilderTypesArr: ["MESSAGE", "USER"],
    fetchMeme: require('./functions/fetchMeme'),
    embedMeme: require('./functions/embedMeme'),
    uploadEmoji: require('./functions/uploadEmoji'),
    DiscordMessageEmbed: require('./classes/DiscordMessage'),
    intToDiscordColor: require('./functions/toDiscordColor'),
    fetchDjsDocs: require("./functions/fetchDjsDocs"),
    splitPages: require("./functions/autoSplitPapges"),
}