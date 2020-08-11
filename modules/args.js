const { params } = require('./consts.js');
const commandLineArgs = require('command-line-args');

const optionDefinitions = Object.values(params).map(param => ({
  ...param,
  alias: param.name.charAt(0),
}));

const getArgs = () => commandLineArgs(optionDefinitions);

module.exports = {
  getArgs,
};
