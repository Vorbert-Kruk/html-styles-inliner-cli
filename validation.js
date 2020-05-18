const { params, fileExtensions } = require('./consts');
const { fileHasValidExtension, fileExists } = require('./file-utils');
const { getArgValue } = require('./args');

const argsAreValid = () => {
  const inputFilePath = getArgValue(params.input);
  const outputFilePath = getArgValue(params.output);

  if (!inputFilePath) throw new Error(`You didn't provide correct path to the input html file!`);

  if (!fileExists(inputFilePath))
    throw new Error(`Provided input path: '${inputFilePath}' is incorrect!`);

  return (
    !!process.argv &&
    fileHasValidExtension(inputFilePath, fileExtensions.html) &&
    (!outputFilePath || fileHasValidExtension(outputFilePath, fileExtensions.html))
  );
};

if (!argsAreValid()) throw new Error('Provided arguments are not valid!');

module.exports = {
  argsAreValid,
};
