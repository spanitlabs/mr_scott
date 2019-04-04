require('colors');
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

// read existing events from the events directory
fs.readdir('./events/', (err, eventFiles) => {
  if (err) return process.stdout.write(err);
  // scan files in event directory and load them here.
  eventFiles.forEach((file) => {
    if (!file.endsWith === '.js') return;
    const eventName = file.split('.')[0];
    const event = require(`./events/${eventName}`);
    client.on(eventName, (obj) => {
      event.run(client, obj);
      const eventLog = `NAME: ${eventName}, ON: ${new Date().toString()}\n`;
      fs.appendFile('./logs/event-activity.txt', eventLog, (err) => {
        if (err) throw err;
        process.stdout.write(
          `EVENT: ${eventName} ON: ${new Date().toString()}\n`.gray
        );
      });
    });
  });
});

module.exports = client;
