const axios = require('axios');

module.exports = async () => {
    let response = await axios('https://www.reddit.com/r/memes/random/.json')
    let content = response.data;
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    return {
        permalink: permalink,
        url: memeUrl,
        image: memeImage,
        title: memeTitle,
        upvotes: memeUpvotes,
        comments: memeNumComments
    }
}