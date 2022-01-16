const Discord = require('discord.js');

/**
* @param {"URL"|"IMAGE"} type 
* @param {Image|String} image 
* @param {Discord.Guild} guild
* @param {Object} options 
* @param {String} [options.reason] The reason
* @param {String} [options.name]
*/
module.exports = async (guild, type, image, options) => {
    if(!guild) throw new TypeError("guild is a required arg.")
    if(!type) throw new TypeError("type is a required arg.")
    if(!image) throw new TypeError("image is a required arg.")
    let emoji;
    if (type === 'IMAGE') {
        emoji = await guild.emojis.create(image, options.name, { reason: options?.reason })
    } else if (type === 'URL') {
        emoji = await guild.emojis.create(image, options.name, { reason: options?.reason })
    }
    return emoji
};