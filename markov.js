const MarkovGen = require('markov-generator');
const jokes = require('./package.json').bradJokes;

const markov = new MarkovGen({
  input: jokes,
  minLength: 5
});

module.exports = markov;
