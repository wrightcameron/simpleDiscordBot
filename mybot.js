const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.argv[2];

if(token == null){
    process.stdout.write("$node mybot.js <token>");
    process.exit(0);
}
//process.stdout.write(token);

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(token);