const Discord = require('discord.js');
const DjsUtilError = require('../DJS_Util_Error');
const { v4: uuid } = require("uuid");
function verifyButton(val, arg){
    if(val == null) throw new DjsUtilError(`Expected a string for '${arg}', recieved ${typeof val}`, `ARG_INVALID`);
    if(!["DANGER", "PRIMARY", "SECONDARY", "SUCCESS"].includes(val)) throw new DjsUtilError(`Invalid style`, `MESSAGE_BUTTON_STYLE_INVALID`)
}

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

        /**
         * The primary button color.
         * @type {Discord.MessageButtonStyle}
         */
        this.primary_style = "SECONDARY";

        /**
         * The secondary button color.
         * @type {Discord.MessageButtonStyle}
         */
         this.secondary_style = "PRIMARY";
    }

    /**
     * Sets the button styles.
     * @param {"DANGER" | "PRIMARY" | "SECONDARY" | "SUCCESS"} primary 
     * @param {"DANGER" | "PRIMARY" | "SECONDARY" | "SUCCESS"} secondary 
     * @returns {Pages}
     */
    setStyles(primary, secondary){
        verifyButton(primary, `primary`);
        verifyButton(secondary, `secondary`);

        this.primary_style = primary
        this.secondary_style = secondary
        return this;
    }

    /**
     * Set the pages.
     * @param  {Discord.MessageEmbed[]} pages
     * @returns {Pages}
     */
    setPages(pages){
        if(!pages) throw new TypeError("pages is a required args")
        //if(pages instanceof Discord.MessageEmbed) throw new TypeError("pages must be a Discord.js MessageEmbed")
        if(!Array.isArray(pages)) throw new TypeError("pages must be an Array")
        this.pages = pages
        return this;
    }

    /**
     * Set the collector time. Default is never.
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
        this.interaction = interaction
        return this
    }

    /**
     * Sends the pages.
     * @param {Object} options
     * @param {Boolean} [options.ephemeral]
     * @param {Boolean} [options.forceEnabledButtons]
     */
    async send(options={ ephemeral: false, forceEnabledButtons: false }){
        let { interaction, collectorTime, filter, pages, pageNumber, buttons } = this;
        const defaults_IDs = {
            left: "djs_util_pages_left" + uuid(),
            right: "djs_util_pages_right" + uuid(),
            center: "djs_util_pages_counter" + uuid()
        };
        const isDisabled = () => {
            if(options.forceEnabledButtons) return false;
            if(pages.length <= 1) return true;
            return false;
        };

        const rows = [
            new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId(defaults_IDs.left)
                .setEmoji(buttons.emojis[0])
                .setStyle(this.primary_style)
                .setDisabled(isDisabled()),
                new Discord.MessageButton()
                .setCustomId(defaults_IDs.center)
                .setDisabled(true)
                .setLabel(`1 of ${pages.length}`)
                .setStyle(this.secondary_style),
                new Discord.MessageButton()
                .setCustomId(defaults_IDs.right)
                .setEmoji(buttons.emojis[1])
                .setStyle(this.primary_style)
                .setDisabled(isDisabled()),
            )
        ]

        if(buttons.labels[0] && buttons.labels[1]){
            rows[0].components[0].setLabel(buttons.labels[0])
            rows[0].components[1].setLabel(buttons.labels[1])
        }
        
        /**
         * @type {Discord.InteractionReplyOptions}
         */
        const payload = { embeds: [pages[0]], components: rows, ephemeral: options.ephemeral, fetchReply: true }

        let replyMessage;
        
        if(interaction?.author){
            replyMessage = await interaction.channel.send(payload)
        } else if(interaction?.isCommand()) {
            if(interaction.replied || interaction.deferred){
                replyMessage = await interaction.editReply(payload)
            } else replyMessage = await interaction.reply(payload)
        } else replyMessage = await interaction.update(payload)

        const collector = interaction.channel.createMessageComponentCollector({ filter });

        collector.on("collect", async i => {
            if(!i.isButton()) return
            
            if(i.customId === defaults_IDs.left){
                if (pages.length === 1) {
                    //...
                } else if (pageNumber === 0) {
                    pageNumber = pages.length - 1
                } else {
                    pageNumber--
                }

                rows[0].components[1].setLabel(`${pageNumber+1} of ${pages.length}`)
                i.update({ embeds: [pages[pageNumber]], components: rows }).catch(( )=>{ });
            } else if(i.customId === defaults_IDs.right){
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