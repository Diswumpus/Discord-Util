const Discord = require('discord.js');
const quizURL = "https://opentdb.com/api.php?amount=10";
const axios = require('axios');
const EmojiServer = require('./emojiServer');

class quiz {
    /**
     * 
     * @param {Object} options 
     * @param {Discord.Interaction} [options.interaction]
     */
    constructor(options) {
        this.interaction = options?.interaction
    }

    /**
     * Set the quiz channel
     * @param {Discord.Interaction} interaction 
     * @returns {quiz}
     */
    setInteraction(interaction) {
        if (!interaction) throw new TypeError("interaction is a required arg")
        this.interaction = interaction
        return this;
    }

    /**
     * Starts the quiz.
     */
    async start() {
        const res = await axios(quizURL);
        console.log(res)
        const quizData = res.data.results[0];
        const quiz = {
            category: quizData.category,
            correct_answer: quizData.correct_answer,
            answers: [quizData.correct_answer, quizData.incorrect_answers],
            difficulty: quizData.difficulty,
            type: quizData.type
        }
        const emojis = {
            check: "https://us-east-1.tixte.net/uploads/emoji.bot.style/check.png",
            xmark: "https://us-east-1.tixte.net/uploads/emoji.bot.style/xmark.png"
        }
        const EmojiGuild = new EmojiServer()
            .setClient(this.interaction.client)
            .create();
        const emoji1 = await EmojiGuild.uploadEmoji({ name: "check", link: emojis.check });
        const emoji2 = await EmojiGuild.uploadEmoji({ name: "xmark", link: emojis.xmark });
        let trysUsed = 5;
        let i = 0;
        const collector = this.interaction.channel.createMessageCollector({ max: 5, errors: ['time'] });
        collector.on("collect", async m => {
            if (m.first().content.toLowerCase() === quiz.correct_answer) {
                collector.stop();
                this.interaction.channel.send(`${emoji1} Correct!`)
            } else {
                if (trysUsed === 0) {
                    collector.stop();
                    this.interaction.channel.send(`${emoji2} Your out of trys!`)
                } else {
                    trysUsed--
                    this.interaction.channel.send(`${emoji2} Wrong, you have ${trysUsed} trys left!`)
                }
            }
        })
    }
}

module.exports = quiz;