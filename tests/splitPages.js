const split = require("../src/functions/autoSplitPapges");

(async () => {
    const res = await split(["Discord", "Twitter"], (v) => `I'm on ${v}!`);
    console.log(res);
})();