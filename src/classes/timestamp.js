const Discord = require('discord.js');
const styles = ["t", "T", "d", "D", "f", "F", "R", "NONE"];

class Timestamp {
    /**
     * @param {Object} data
     * @param {"t"|"T"|"d"|"D"|"f"|"F"|"R"|"NONE"} [data.style]
     * @param {Number} [data.time]
     */
    constructor(data){
        /**
         * The time for the timestamp.
         * @type {Number}
         */
        this.time = data?.time || null
        
        /**
         * The timestamp style.
         * @type {"t"|"T"|"d"|"D"|"f"|"F"|"R"|"NONE"}
         */
        this.style = data?.style || "NONE"
    }

    /**
     * Set the timestamp time.
     * @param {Number} time 
     * @returns {Timestamp}
     * @example setTime(member.joinedTimestamp + Date.now())
     */
    setTime(time){
        if(typeof time !== "number") throw new TypeError("time must be a number (ms)")
        this.time = time
        return this;
    }

    /**
     * Set the timestamp style.
     * @param {"t"|"T"|"d"|"D"|"f"|"F"|"R"|"NONE"} style 
     * @returns {Timestamp}
     */
    setStyle(style){
        if(!styles.includes(style)) throw new TypeError("style must be a timestamp style")
        if(typeof style !== "string") throw new TypeError("style must be a string")
        this.style = style
        return this;
    }

    /**
     * Returns the unix timestamp time.
     * @returns {Number}
     */
    toUnix(){
        const time = Math.round(new Date(this.time)/1000);
        return time
    }

    /**
     * Returns the timestamp.
     */
    toString(){
        const unixTime = this.toUnix();

        if(this.style === "NONE") this.style = ""
        else this.style = ":" + this.style
        const timestamp = "<t:" + unixTime + this.style + ">"

        return timestamp
    }
}

module.exports = Timestamp