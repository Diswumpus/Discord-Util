const fetch = require("node-fetch").default;
const { stringify } = require("querystring");
const { decode } = require("html-entities");
const { MessageEmbed } = require("discord.js");

const BaseURL = "https://djsdocs.sorta.moe/v1/main/";

/**
 * 
 * @param {String} q 
 * @returns 
 */
module.exports = async (q, source="stable") => {
    q = q.trim();
	const URL = BaseURL + source + "/embed?q=" + q;

	const res = await (await fetch(URL).then((res) => res.json()));
    
	if (!res) {
		return null;
	}

	return {
        raw: res,
        embed: new MessageEmbed()
        .setAuthor(`${res.author?.name}`, `${res.author?.icon_url}`, `${res.author?.url}`)
        .setTitle(`Search results:`)
        .setDescription(res.description)
    };
}