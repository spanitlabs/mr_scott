exports.run = (client, _) => {
  process.stdout.write(`Logged in as ${client.user.tag}\n`);

  client.user.setActivity('!bot list-commands');
};
