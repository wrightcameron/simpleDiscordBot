const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    // Exit and stop if it's not there
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case "ping":
            message.channel.send('Pong!');
            break;
        case "foo":
            message.channel.send("bar!");
            break;
        case "prefix":
            // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            // change the configuration in memory
            config.prefix = newPrefix;
            // Now we have to save the file.
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
            break;
    }
});

client.login(config.token);