const { fileExtensions } = require('./consts');
const { fileHasValidExtension, fileExists } = require('./file-utils');
const { getArgs } = require('./args');

const args = getArgs();

const argsAreValid = () => {
  const { input: inputFilePath, output: outputFilePath } = args;

  if (!inputFilePath)
    throw new Error(`You didn't provide correct path to the input html file!`);

  else if (!fileExists(inputFilePath))
    throw new Error(`Provided input path: '${inputFilePath}' is incorrect!`);

  return (
    !!process.argv &&
    fileHasValidExtension(inputFilePath, fileExtensions.html) &&
    (!outputFilePath ||
      fileHasValidExtension(outputFilePath, fileExtensions.html))
  );
};

if (!argsAreValid()) throw new Error('Provided arguments are not valid!');

module.exports = {
  argsAreValid,
};
