const { } = require("../src/");

(async () => {
    const res = await split(["Discord", "Twitter"], (v) => `I'm on ${v}!`);
    console.log(res);
})();