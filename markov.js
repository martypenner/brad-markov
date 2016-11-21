const MarkovGen = require('markov-generator');
const jokes = require('./package.json').bradJokes;

const markov = new MarkovGen({
  input: jokes,
  minLength: 5
});

const markovWithRandomBradbotMention = () => {
  const doIt = Math.random() > 0;
  const prefix = doIt ? '@bradbot, ' : '';
  return prefix + markov.makeChain();
};

module.exports = markovWithRandomBradbotMention;
