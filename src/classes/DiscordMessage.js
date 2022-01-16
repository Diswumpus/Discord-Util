const Discord = require('discord.js');

class DiscordMessage {
    /**
     * 
     * @param {Object} data 
     * @param {Discord.Message} [data.message]
     * @param {String} [data.urlEmoji]
     */
    constructor(data) {
        /**
         * The message.
         * @type {Discord.Message}
         */
        this.message = data?.message

        /**
         * The url emoji for the button.
         * @type {String}
         */
        this.urlEmoji = data?.urlEmoji
    }

    /**
     * Sets the url emoji for the button.
     * @param {String} emoji 
     * @returns {DiscordMessage}
     */
    setEmoji(emoji) {
        if (!emoji) throw new TypeError("emoji is a required arg")
        if (typeof emoji !== "string") throw new TypeError("emoji must be a string")

        this.urlEmoji = emoji
        return this;
    }

    /**
     * Sets the message.
     * @param {Discord.Message} message 
     * @returns {DiscordMessage}
     */
    setMessage(message) {
        if (!message) throw new TypeError("message is a required arg")
        if (typeof message !== "object") throw new TypeError("message must be a object")

        this.message = message
        return this;
    }

    /**
     * Creates the embed and button.
     * @param {Discord.ColorResolvable} color 
     * @returns {Discord.InteractionReplyOptions}
     */
    async create(color, type) {
        const embed = new Discord.MessageEmbed()
        if (this.message.attachments.size > 0) {
            embed.setImage(this.message.attachments.first().url)
        }

        if(color) embed.setColor(color);

        if(this.message.author){
            embed.setAuthor(this.message.author.tag, this.message.author.displayAvatarURL({ dynamic: true }))
        }
        if (this.message.content) {
            embed.setDescription(this.message.content)
        }
        if (this.message?.webhookId !== null) {
            embed.setFooter(`Webhook`)
        } else if (this.message.author.bot === true) {
            embed.setFooter(`Bot`)
        } else {
            embed.setFooter(`Human`)
        }
        if(this.message.embeds.length > 0){
            if(!embed.description){
                embed.setDescription(this.message.embeds[0].description || "Discord Message Embed")
            }
        }
        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setEmoji(this.urlEmoji)
            .setLabel(`Jump to message`)
            .setStyle("LINK")
            .setURL(this.message.url)
        )
        return {
            embeds: [embed],
            components: [row]
        }
    }
}

module.exports = DiscordMessage;