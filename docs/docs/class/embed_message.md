# Discord Message Embed
The `DiscordMessageEmbed` class creates an embed and component based on the message.

### EXAMPLE
PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
message | [Discord.Message](https://discord.js.org/#/docs/main/stable/class/Message) | true | None | The message.
urlEmoji | String (Discord Emoji ID) | true | None | The `URL` emoji used for the button.

```js
const du = require('discord.js-util');

const message = await (await interaction.channel.messages.fetch()).first(); //Fetch some message
const embedData = new du.DiscordMessageEmbed() //Create the class
.setMessage(message) //Set the message
const payload = await embedData.create("GREEN") //Creates the embed

await interaction.reply(payload); //Replys to the interaction, you can change this
```

### METHODS
#### .setMessage
Sets the message.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
message | [Discord.Message](https://discord.js.org/#/docs/main/stable/class/Message) | false | None | The message.
```js
.setMessage(someMessageHere); //Change `someMessageHere` to your message.
```
#### .setEmoji
Sets the url emoji for the button.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
emoji | String | false | None | The emoji for the button.
```js
.setEmoji("<a:ayyy:609810849801490>"); //Some random emoji ID
```

#### .create
Creates the embed.

```js
.create();
```

##### Returns
PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
payload | [Discord.InteractionReplyOptions](https://discord.js.org/#/docs/main/stable/typedef/InteractionReplyOptions) | true | None | The payload for a interaction.