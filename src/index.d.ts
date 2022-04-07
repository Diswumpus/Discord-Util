import { CollectorFilter, Interaction, MessageEmbed } from "discord.js";

declare module "discord.js-util" {
    type ContextMenuType = "USER" | "MESSAGE";
    type ContextMenuData = {
        default_permission: boolean,
        name: string,
        type: ContextMenuType
    };

    type TimestampRes = `<t:${number}:${string}>` | `<t:${number}>`;
    type TimestampStyle = "t" | "T" | "d" | "D" | "f" | "F" | "R" | "NONE";
    type TimestampData = {
        style?: TimestampStyle,
        time?: number
    }

    type PagesSendOptions = {
        ephemeral?: boolean;
        forceEnabledButtons?: boolean;
    }
    type ButtonStyle = "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER";

    class ContextMenuBuilder {
        public data: ContextMenuData;

        setDefaultPermission(v: boolean): ContextMenuBuilder;
        setName(name: string): ContextMenuBuilder;
        setType(type: ContextMenuType): ContextMenuBuilder;
        toJSON(): ContextMenuData;
    }

    class timestamp {
        /**
        * The time for the timestamp.
        */
        public time: Number;

        /**
         * The timestamp style.
         */
        public style: TimestampStyle;

        constructor(data: TimestampData);

        /**
         * Set the timestamp time.
         * @example setTime(member.joinedTimestamp + Date.now())
         */
        setTime(time: number): Timestamp;

        /**
         * Set the timestamp style.
         */
        setStyle(style: TimestampStyle): Timestamp;

        /**
         * Returns the unix timestamp time.
         */
        toUnix(): number;

        /**
         * Returns the timestamp.
         */
        toString(): TimestampRes;
    }

    class pages {
        public interaction: Interaction;
        public pageNumber: number;
        public collectorTime: number;
        public filter: (i: Interaction) => boolean;
        public buttons: string[];
        public pages: MessageEmbed[];
        public primary_style: ButtonStyle;
        public secondary_style: ButtonStyle;
    
        /**
         * Sets the button styles.
         */
        setStyles(primary: ButtonStyle, secondary: ButtonStyle): Pages;
    
        /**
         * Set the pages.
         */
        setPages(pages: MessageEmbed[]): Pages;
    
        /**
         * Set the collector time. Default is never.
         */
        setCollectorTime(time: string): Pages;
    
        /**
         * Set the collector function.
         */
        setFilter(filter: (i: Interaction) => boolean): Pages;
    
        /**
         * Set the button emojis.
         */
        setEmojis(emoji1: string, emoji2: string): Pages;
    
        /**
         * Set the button labels.
         */
        setLabels(label1: string, label2: string): Pages;
    
        /**
         * Set the channel that the pages will be sent in.
         */
        setInteraction(channel: Interaction): Pages;
    
        /**
         * Sends the pages.
         */
        send(options: PagesSendOptions): Promise<void>;
    }
}