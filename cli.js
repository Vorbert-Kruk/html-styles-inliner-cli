#!/usr/bin/env node
const { getArgValue } = require('./args');
const { getAbsoluteFilePath } = require('./utils');
const { params } = require('./consts');
const { fileExists, getFileData } = require('./file-utils');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(getArgValue(params.output));

getFileData(inputFile).then(data => console.log(data));

console.log('Nie wydupcyłem się c:');

// inline <ścieżka do html-a> <output html-a>
