#!/usr/bin/env node

const _path = require('path');
const inlineHtmlStyles = require('../stylesInliner.js');
const { getArgs } = require('../modules/args.js');
const { baseOutputFilePrefix } = require('../modules/consts.js');
const { getAbsoluteFilePath, getRelativePath } = require('../modules/utils.js');

const args = getArgs();

const inputFile = getAbsoluteFilePath(args.input);
const outputFile =
  getAbsoluteFilePath(args.output) ||
  getRelativePath(
    inputFile,
    `${baseOutputFilePrefix}${_path.basename(inputFile)}`,
  );

inlineHtmlStyles(inputFile, outputFile);
