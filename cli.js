#!/usr/bin/env node
const { getArgValue } = require('./args');
const { getAbsoluteFilePath, hrefRegex } = require('./utils');
const { params, fileExtensions } = require('./consts');
const { fileExists, getFileData } = require('./file-utils');
const { parse } = require('node-html-parser');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(getArgValue(params.output));

getFileData(inputFile).then(html => {
  const htmlDocument = parse(html);
  const linkElements = htmlDocument.querySelectorAll('link');
  if (!linkElements && linkElements.length === 0) return;

  const stylePaths = linkElements
    .filter(linkElement => linkElement.rawAttrs.includes('stylesheet'))
    .map(linkElement =>
      linkElement.rawAttrs.substring(
        linkElement.rawAttrs.indexOf('href'),
        linkElement.rawAttrs.indexOf(fileExtensions.css) + fileExtensions.css.length,
      ),
    );

  console.log(stylePaths);
});

console.log('Nie wydupcyłem się c:');

// inline <ścieżka do html-a> <output html-a>
