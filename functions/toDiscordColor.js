const Discord = require("discord.js");
const colors = {
    0: "DEFAULT",
    1752220: "AQUA",
    1146986: "DARK_AQUA",
    3066993: "GREEN",
    2067276: "DARK_GREEN",
    3447003: "BLUE",
    2123412: "DARK_BLUE",
    10181046: "PURPLE",
    7419530: "DARK_PURPLE",
    15277667: "LUMINOUS_VIVID_PINK",
    11342935: "DARK_VIVID_PINK",
    15844367: "GOLD",
    12745742: "DARK_GOLD",
    15105570: "ORANGE",
    11027200: "DARK_ORANGE",
    15158332: "RED",
    10038562: "DARK_RED",
    9807270: "GREY",
    9936031: "DARK_GREY",
    8359053: "DARKER_GREY",
    12370112: "LIGHT_GREY",
    3426654: "NAVY",
    2899536: "DARK_NAVY",
    16776960: "YELLOW",
    7506394: "BLURPLE"
}

module.exports = (color) => {
    const discordColor = colors[color];

    return discordColor;
}