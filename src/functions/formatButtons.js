const Discord = require("discord.js");
/**
 * Formats buttons into rows.
 * @param {Discord.MessageButton[]} buttons 
 * @returns {Discord.MessageActionRow[]}
 */
module.exports = (buttons) => {
    if(!Array.isArray(buttons)) buttons = [buttons]
    const rows=[new MessageActionRow()];
    let row = 0;
    let btn = 0;
    for(const button of buttons){
        if(btn === 5){
            rows.push(new MessageActionRow())
            row++
        }
        if(row === 5){
            break
        }
        
        rows[row].addComponents(button)
        btn++
    }
    return rows
}