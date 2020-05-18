const inlineHtmlStyles = require('../cli');
const { getArgValue } = require('./modules/args');
const { params, baseOutputFilePrefix } = require('./modules/consts');
const { getAbsoluteFilePath } = require('./modules/utils');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(
  getArgValue(params.output) || `./${baseOutputFilePrefix}${_path.basename(inputFile)}`,
);

inlineHtmlStyles(inputFile, outputFile);
