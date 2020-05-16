const { minArgsQuantity, params, fileExtensions } = require('./consts');
const _path = require('path');

const getArgValue = argName => {
  const args = process.argv;
  const argIndex = args.indexOf(`--${argName}`);

  if (argIndex !== -1 && args[argIndex + 1] !== undefined) {
    return args[argIndex + 1];
  }

  return null;
};

const fileHasValidExtension = (filePath, extensionName) =>
  filePath && _path.extname(filePath) === extensionName;

const argsAreValid = () => {
  const inputFilePath = getArgValue(params.input);
  const outputFilePath = getArgValue(params.output);

  return (
    !!process.argv &&
    inputFilePath &&
    fileHasValidExtension(inputFilePath, fileExtensions.html) &&
    fileHasValidExtension(outputFilePath, fileExtensions.html)
  );
};

module.exports = {
  argsAreValid,
};
