const { argsAreValid } = require('./validation');

if (!argsAreValid()) throw new Error('Provided arguments are not valid!');

const args = process.args.slice(2);

const getArgValue = argName => {
  const argIndex = args.indexOf(`--${argName}`);

  if (argIndex !== -1 && args[argIndex + 1] !== undefined) {
    return args[argIndex + 1];
  }

  return null;
};

module.exports = {
  getArgValue,
  argsAreValid,
};
