# Context Menu Builder
Creates a Discord Context Menu.

### EXAMPLE
PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
name | String | true | None | The name of the context menu.
type | Context Menu Type (`MESSAGE`|`USER`) | true | None | The type of the context menu.

```js
const du = require('discord.js-util');

const ContextMenus = [
    new du.ContextMenuBuilder()
    .setType("USER")
    .setName("Avatar"),
    //...
];

//Create your application commands.
//...
```

### METHODS
#### .setName
Sets the name of the context menu.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
name | String | false | None | The name.
```js
.setName("Avatar");
```
#### .setType
Sets the type of the context menu.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
type | Context Menu Types (`MESSAGE`|`USER`) | false | None | The type.
```js
.setType("USER");
```

#### .toJSON
Returns to JSON to send to Discord.

```js
.toJSON();
```

##### Returns
PARAMETER | TYPE  | DESCRIPTION
------ | ------  | ------
JSON | Object  | The JSON for Discord.