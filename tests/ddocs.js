const djsDocs = require("../src/functions/fetchDjsDocs");

(async () => {
    const res = await djsDocs("client");
    console.log(res);
})();