const Discord = require('discord.js');

class EmojiServer {
    /**
     * @param {Object} data 
     * @param {Discord.Client} [data.client]
     */
    constructor(data){
        /**
         * The emoji server.
         * @type {Discord.Guild}
         */
        this.server = null
        /**
         * The client.
         * @type {Discord.Client}
         */
        this.client = data?.client
    }

    /**
     * Sets the client.
     * @param {Discord.Client} client 
     * @returns {EmojiServer}
     */
    setClient(client){
        this.client = client
        return this;
    }

    /**
     * @private
     */
    async init(){
        this.server = await this.fetchServer(true);
    }

    /**
     * Creates the server.
     * @returns {Discord.Guild}
     */
    async create(){
        await this.init();
        const fetchedGuild = await this.fetchServer();
        if(fetchedGuild?.name) return fetchedGuild;
        const guild = await this.client.guilds.create("Discord.js Util Emojis", {
            channels: [{ name: "general", type: "GUILD_TEXT" }]
        })
        const channel = await guild.channels.cache.first()
        /**
         * @type {Discord.Invite}
         */
        const invite = await channel.createInvite();

        let owner = this.client.application.owner;
        if(!owner?.tag) owner = this.client.users.cache.get(owner.ownerId);
        owner.send({ content: `Discord.js Util created an emoji server: ${invite.url}`})

        return guild;
    }

    /**
     * Fetch the emoji server.
     * @param {Boolean} force
     * @returns {Discord.Guild|null}
     */
    async fetchServer(force){
        await this.init();
        let guild = this.client.guilds.cache.find(g => g.name === "Discord.js Util Emojis");
        if(!guild && force === true) guild = await this.create();
        
        return guild
    }

    /**
     * Uploads an emoji to the server.
     * @param {Object} emoji
     * @param {String} [emoji.name]
     * @param {String} [emoji.link]
     * @returns {Discord.GuildEmoji}
     */
    async uploadEmoji(emoji){
        const uploadedEmoji = await this.server.emojis.create(emoji.link, emoji.name);
        return uploadedEmoji;
    }
}

module.exports = EmojiServer;