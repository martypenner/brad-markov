if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

const Botkit = require('botkit');
const markov = require('./markov');

const controller = Botkit.slackbot({
  debug: true
});

controller.spawn({
  token: process.env.token
}).startRTM();

controller.hears(
  ['.*'],
  'direct_message,direct_mention,mention',
  (bot, message) => {
    // bot.api.reactions.add({
    //     timestamp: message.ts,
    //     channel: message.channel,
    //     name: 'robot_face',
    //   },
    //   (err, res) => {
    //     if (err) {
    //       bot.botkit.log('Failed to add emoji reaction :(', err);
    //     }
    //   });
    bot.reply(message, markov.makeChain());
  });
