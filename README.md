# Discord-Util
> **Discord Util - Embed pages, fun commands, utils, and so much more!**

# 📝 Note
This package is not %100 stable if you find a bug check out [this](#support) and report it! There's also many more features coming...

# Features
- 🗝️ TS support
- 👍 ~~Stable~~
- 📃 Bunch of features
- 📤 Discord.js v13

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
To report a bug go [here.](https://github.com/Diswumpus/Discord-Util/issues)

For support join [this](https://discord.gg/Fv9WDngH7n) server.

[![Discord](https://invidget.switchblade.xyz/834199640702320650)](https://discord.gg/f6s684ys)