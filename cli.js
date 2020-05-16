#!/usr/bin/env node
const { getArgValue } = require('./args');
const { params } = require('./consts');
const { fileExists } = require('./file-utils');

const inputFile = getArgValue(params.input);
const outputFile = getArgValue(params.output);

if (!fileExists(inputFile)) throw new Error(`Provided input path: '${inputFile}' is incorrect!`);

console.log('Nie wydupcyłem się c:');

// inline <ścieżka do html-a> <output html-a>
