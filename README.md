# Discord-Util
> **Discord Util - Embed pages, fun commands, utils, and so much more!**

# Requirements
- Discord.js v13
- Node v16.6.0
# Examples
## Pages
```js
const du = require('discord.js-util');

const pages = new du.pages()
.setInteraction(interaction) //Command interaction or component interaction
.setPages([
    new Discord.MessageEmbed()
    .setTitle("Page 1")
    .setColor("RANDOM"),
    new Discord.MessageEmbed()
    .setTitle("Page 2")
    .setColor("RANDOM")
]) //Array of Discord MessageEmbeds
.setEmojis("⬅️", "➡️") //Back emoji, foward emoji
.send() //Replys to the interaction or edits the interaction
```
## Timestamps
- [Timestamp Styles](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles)
```js
const du = require('discord.js-util');

const timestamp = new du.timestamp()
.setTime(Date.now()) //Set the timestamp time (ms)
.setStyle("NONE") //Set the timestamp style
.toString() //Returns the timestamp
```

## Support & Bugs
To report a bug go [here.](https://github.com/Pepperbot-Development/Discord-Util/issues)

For support join [this](https://discord.gg/Fv9WDngH7n) server.