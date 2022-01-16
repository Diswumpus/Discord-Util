# Pages
Embed Pages, with **✨ buttons ✨**!

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
pages | [Discord.MessageEmbed[]](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) | true | None | The message embed array.

### EXAMPLE
```js
const du = require('discord.js-util');

new du.pages()
//All your pages
.setPages([
    new MessageEmbed()
    .setTitle("Embed 1"),
    //...
])
.setInteraction(someInteraction) //Change this to your interaction var // NOTE: You can use just a message here
.send({ ephemeral: true }); //Send private message
```

### METHODS
#### .setPages
Sets the pages.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
pages | [Discord.MessageEmbed[]](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) | false | None | The message embeds.
```js
.setPages([
    new MessageEmbed()
    .setTitle("Embed 1"),
    //...
]);
```
#### .setInteraction
Sets the interaction used to reply. This can also be a message.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
interaction | [Discord.Interaction](https://discord.js.org/#/docs/main/stable/class/Interaction) | false | None | The interaction.
```js
.setInteraction(interaction);
```
#### .setEmojis
Sets the emojis buttons.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
emoji1 | String | false | None | The back emoji.
emoji2 | String | false | None | The forward emoji.

```js
//Unicode emojis
.setEmojis("⬅️", "➡️")
//Custom emojis
.setEmojis("<:npm_minus:853102825960505344>", "<:npm_plus:853104426112516126>")
```
#### .setLabels
Sets the button labels.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
label1 | String | false | None | The back label.
label2 | String | false | None | The forward label.

```js
.setLabels("Back", "Forward");
```

#### .setFilter
Sets the collector function.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
filter | Function | false | None | The filter function.

```js
.setFilter(e => e.user.id === "820465204411236362");
```

#### .send
Sends the embed pages.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
ephemeral | Boolean | false | None | Weather the interaction reply should be ephemeral/hidden.

```js
.send({ ephemeral: false });
```