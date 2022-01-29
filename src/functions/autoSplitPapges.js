const Discord = require("discord.js");
const DjsUtilError = require("../DJS_Util_Error");

/**
 * The template function to add page text.
 * @typedef {Function} TemplateFunction
 * @param {any} value 
 * @returns {String}
 */

/**
 * (BETA) Splits text into pages.
 * @param {IterableIterator} forValue 
 * @param {TemplateFunction} template 
 * @param {Number} textPerPagePercent 
 * @returns {String[]}
 */
module.exports = async (forValue, template, textPerPagePercent=5) => {
    const embeds = [];
    let pages = []
    let currentPage = "";
    let msgCount = 0;

    for (let value of forValue) {
        let textToAdd = await template(value);
        if(!textToAdd || typeof textToAdd != "string") throw new DjsUtilError(
            `template() must return a string`,
            DjsUtilError.Errors.INVALID_ARG
        );

        currentPage += textToAdd;
        msgCount++;
        if (msgCount % textPerPagePercent == 0) {
            pages.push(currentPage)
            currentPage = []
        }
    }
    
    if (currentPage.length > 0)
        pages.push(currentPage)

    return pages;
};