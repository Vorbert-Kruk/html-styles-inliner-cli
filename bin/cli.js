#!/usr/bin/env node

const inlineHtmlStyles = require('../cli.js');
const { getArgValue } = require('../modules/args.js');
const { params, baseOutputFilePrefix } = require('../modules/consts.js');
const { getAbsoluteFilePath } = require('../modules/utils.js');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(
  getArgValue(params.output) || `./${baseOutputFilePrefix}${_path.basename(inputFile)}`,
);

inlineHtmlStyles(inputFile, outputFile);
