# Discord-Util
> **Discord Util - Embed pages, fun commands, utils, and so much more!**

# 📝 Note
> This package might have some bugs if you spot one please report it on our [support server](#support) and report it! There's also many more features coming...

# Features
- 🗝️ TS support
- 📃 Tons of features
- 📤 Discord.js v13 Support

# Requirements
- Discord.js v13
- Node v16.6.0

# Examples
## Pages
```js
const { autoSplitPages, pages } = require("discord.js-util");

const splited = await autoSplitPages([
    "Twitter",
    "Discord",
    "Instagram"
], (v) => `I'm on ${v}!`);

await new pages()
.setPages(
    splited.map(ebd => ebd.setColor("BLURPLE"))
)
.setInteraction(interaction)
.setStyles("PRIMARY", "SECONDARY")
.setEmojis("👈", "👉")
.send({
    ephemeral: true
});
```
## Where's the rest?
Typings and examples will be coming soon! [Join our Discord](https://discord.gg/Fv9WDngH7n) to stay tuned.

# Documentation
The docs are coming soon! Right now you can check out the examples above.

# Support
To report a bug using Github [click here](https://github.com/turtlepaws-workshop/Discord-Util/issues).
For support and issues join [our support server][discord].

[![Discord](https://invidget.switchblade.xyz/834199640702320650)][discord]

[discord]: https://discord.gg/Fv9WDngH7n