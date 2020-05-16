#!/usr/bin/env node
const { getArgValue } = require('./args');
const { getAbsoluteFilePath, hrefRegex } = require('./utils');
const { params } = require('./consts');
const { fileExists, getFileData } = require('./file-utils');
const { parse } = require('node-html-parser');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(getArgValue(params.output));

getFileData(inputFile).then(html => {
  const htmlDocument = parse(html);
  const linkElements = htmlDocument.querySelectorAll('link');
  if (!linkElements || linkElements.length === 0) return;

  const stylePaths = linkElements
    .filter(linkElement => linkElement.getAttribute('rel') === 'stylesheet')
    .map(linkElement => linkElement.getAttribute('href'));

  if (!stylePaths || stylePaths.length === 0) return;
});

console.log('Nie wydupcyłem się c:');

// inline <ścieżka do html-a> <output html-a>
