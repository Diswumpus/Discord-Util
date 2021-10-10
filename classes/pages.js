const Discord = require('discord.js');

class Pages {
    constructor(pages){
        /**
         * The channel to send the pages in.
         * @type {Discord.Interaction}
         */
        this.interaction = null
        /**
         * The page number.
         */
        this.pageNumber = 0
        /**
         * The time the collector should run.
         */
        this.collectorTime = null
        /**
         * The collector filter.
         */
        this.filter = i => {
            return true
        }
        /**
         * The button config.
         */
        this.buttons = {
            emojis: ["👈", "👉"],
            labels: [],

        }
        /**
         * The pages.
         * @type {Discord.MessageEmbed[]}
         */
        this.pages = pages||null;
    }

    /**
     * Set the pages.
     * @param  {Discord.MessageEmbed[]} pages
     * @returns {Pages}
     */
    setPages(pages){
        if(!pages) throw new TypeError("pages is a required args")
        if(pages instanceof Discord.MessageEmbed) throw new TypeError("pages must be a Discord.js MessageEmbed")
        if(!Array.isArray(pages)) throw new TypeError("pages must be an Array")
        this.pages = pages
        return this
    }

    /**
     * Set the collector time.
     * @param {Number} time 
     * @returns {Pages}
     */
    setCollectorTime(time){
        if(!time) throw new TypeError("time is a required args")
        if(typeof time !== "number") throw new TypeError("time must be a number")
        this.collectorTime = time
        return this
    }

    /**
     * Set the collector function.
     * @param {Function} filter 
     * @returns {Pages}
     */
    setFilter(filter){
        if(!filter) throw new TypeError("filter is a required args")
        if(filter instanceof Function) throw new TypeError("filter must be a function")
        this.filter = filter
        return this
    }

    /**
     * Set the button emojis.
     * @param {String} emoji1 
     * @param {String} emoji2 
     * @returns {Pages}
     */
    setEmojis(emoji1, emoji2){
        if(!emoji1 || !emoji2) throw new TypeError("emoji1 and emoji2 are required args")
        if(typeof emoji1 !== "string" || typeof emoji2 !== "string") throw new TypeError("emoji1 and emoji2 must be a string");
        this.buttons.emojis = [emoji1, emoji2]
        return this
    }

    /**
     * Set the button labels.
     * @param {String} label1 
     * @param {String} label2 
     * @returns {Pages}
     */
    setLabels(label1, label2){
        if(!label1 || !label2) throw new TypeError("label1 and label2 are required args")
        if(typeof label1 !== "string" || typeof label2 !== "string") throw new TypeError("label1 and label2 must be a string");
        this.buttons.labels = [label1, label2]
        return this
    }

    /**
     * Set the channel that the pages will be sent in.
     * @param {Discord.Interaction} channel 
     * @returns {Pages}
     */
    setInteraction(interaction){
        if(!interaction) throw new TypeError("interaction is a required args")
        if(interaction instanceof Discord.Interaction) throw new TypeError("interaction must be a Discord.js interaction")
        this.interaction = interaction
        return this
    }

    /**
     * Sends the pages.
     */
    send(){
        let { interaction, collectorTime, filter, pages, pageNumber, buttons } = this;

        const rows = [
            new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId('<')
                .setEmoji(buttons.emojis[0])
                .setStyle("SECONDARY"),
                new Discord.MessageButton()
                .setCustomId('dont-touch')
                .setDisabled(true)
                .setLabel(`1 of ${pages.length}`)
                .setStyle("SECONDARY"),
                new Discord.MessageButton()
                .setCustomId('>')
                .setEmoji(buttons.emojis[1])
                .setStyle("SECONDARY"),
            )
        ]
        if(buttons.labels[0] && buttons.labels[1]){
            rows[0].components[0].setLabel(buttons.labels[0])
            rows[0].components[1].setLabel(buttons.labels[1])
        }
        const payload = { embeds: [pages[0]], components: rows }
        if(interaction.isCommand()) {
            if(interaction.replied){
                interaction.editReply(payload)
            } else interaction.reply(payload)
        } else interaction.update(payload)

        const collector = interaction.channel.createMessageComponentCollector({ filter: filter });

        collector.on("collect", async i => {
            if(!i.isButton()) return
            if(i.customId === "<"){
                if (pages.length === 1) {
                    //...
                } else if (pageNumber === 0) {
                    pageNumber = pages.length - 1
                } else {
                    pageNumber--
                }

                rows[0].components[1].setLabel(`${pageNumber+1} of ${pages.length}`)
                i.update({ embeds: [pages[pageNumber]], components: rows }).catch(( )=>{ });
            } else if(i.customId === ">"){
                if (pages.length === 1) {
                    //...
                } else if (pageNumber + 1 === pages.length) {
                    pageNumber = 0
                } else {
                    pageNumber++
                }

                rows[0].components[1].setLabel(`${pageNumber+1} of ${pages.length}`)
                i.update({ embeds: [pages[pageNumber]], components: rows }).catch(( )=>{ });
            }
        })
    }
}

module.exports = Pages;