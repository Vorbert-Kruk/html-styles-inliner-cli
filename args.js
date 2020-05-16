const { argsAreValid } = require('./validation');
const { params } = require('./consts');
const { fileExists } = require('./file-utils');

if (!argsAreValid()) throw new Error('Provided arguments are not valid!');

const args = process.argv.slice(2);

const getArgValue = argName => {
  const argIndex = args.indexOf(`--${argName}`);

  if (argIndex !== -1 && args[argIndex + 1] !== undefined) {
    return args[argIndex + 1];
  }

  return null;
};

const inputFilePath = getArgValue(params.input);

if (!fileExists(inputFilePath))
  throw new Error(`Provided input path: '${inputFilePath}' is incorrect!`);

module.exports = {
  getArgValue,
  argsAreValid,
};
