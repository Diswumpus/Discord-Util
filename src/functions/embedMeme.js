const Discord = require('discord.js');
const memeObj = {
    permalink: String,
    url: String,
    image: String,
    title: String,
    upvotes: String|Number,
    comments: String|Number
}

/**
 * @param {memeObj} memeObject 
 */
module.exports = (memeObject) => {
    if(!memeObject) throw new TypeError(`memeObject is a required arg`)
    return new Discord.MessageEmbed()
    .setTitle(`${memeObject.title}`)
    .setURL(`${memeObject.url}`)
    .setColor('RANDOM')
    .setImage(memeObject.image)
    .setFooter(`👍 ${memeObject.upvotes} 💬 ${memeObject.comments}`)
}