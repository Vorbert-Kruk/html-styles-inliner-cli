const { minArgsQuantity, params, fileExtensions } = require('./consts');
const { removeQuoteMarks } = require('./utils');
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
  filePath && _path.extname(removeQuoteMarks(filePath)) === extensionName;

const argsAreValid = () => {
  const inputFilePath = getArgValue(params.input);
  const outputFilePath = getArgValue(params.output);

  return (
    !!process.argv &&
    fileHasValidExtension(inputFilePath, fileExtensions.html) &&
    (!outputFilePath || fileHasValidExtension(outputFilePath, fileExtensions.html))
  );
};

module.exports = {
  argsAreValid,
};
