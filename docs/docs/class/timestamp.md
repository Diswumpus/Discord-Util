# Pages
Creates a Discord UNIX Timestamp.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
style | Timestamp Styles (`t`|`T`|`d`|`D`|`f`|`F`|`R`|`NONE`) | true | None | The timestamp style.
time | Number (ms) | true | None | The timestamp time in ms.

### EXAMPLE
```js
const du = require('discord.js-util');

new du.timestamp()
.setTime(Date.now())
.setStyle("NONE")
.toString();
```

### METHODS
#### .setTime
Sets the time.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
time | Number (ms) | false | None | The ms time.
```js
.setTime(Date.now());
```
#### .setStyle
Sets the timestamp style.

PARAMETER | TYPE | OPTIONAL | DEFAULT | DESCRIPTION
------ | ------ | ------ | ------ | ------
style | Timestamp Styles (`t`|`T`|`d`|`D`|`f`|`F`|`R`|`NONE`) | false | None | The timestamp style.

```js
.setStyle("NONE");
```

#### .toUNIX
Returns the UNIX time.

```js
.toUNIX();
//=> Some unix number
```

#### .toString
Creates the timestamp ready for an embed or message!

```js
.toString();
//=> `<t:143997459>`

//Or
`${timestamp}`
//=> `<t:143997459>`
```