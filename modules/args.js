
const { params } = require('./consts.js');
const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  {
    name: 'input', alias: 'i', type: String
  },
  {
    name: 'output', alias: 'o', type: String,
  }
];
const options = commandLineArgs(optionDefinitions);
console.log(options);

module.exports = {
  getArgValue,
};
