const Discord = require('discord.js');

module.exports = {
    pages: require('./classes/pages'),
    timestamp: require('./classes/timestamp'),
    ContextMenuBuilder: require('./classes/contextMenuBuilder'),
    ContextMenuBuilderTypes: {
        "MESSAGE": 3,
        "USER": 2,
    },
    ContextMenuBuilderTypesArr: ["MESSAGE", "USER"],
    fetchMeme: require('./functions/fetchMeme'),
    embedMeme: require('./functions/embedMeme'),
}