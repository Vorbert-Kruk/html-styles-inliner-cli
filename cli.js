#!/usr/bin/env node
require('./validation');
const _path = require('path');
const { getArgValue } = require('./args');
const { getAbsoluteFilePath, urlRegex, removeDomElements } = require('./utils');
const { params, baseOutputFilePrefix } = require('./consts');
const { getFileData, getFilesData, createFile } = require('./file-utils');
const { parse } = require('node-html-parser');
const inlineCss = require('inline-css');
const isEmpty = require('lodash.isempty');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(
  getArgValue(params.output) || `./${baseOutputFilePrefix}${_path.basename(inputFile)}`,
);
const projectRootDirectory = _path.dirname(inputFile);

getFileData(inputFile).then(async html => {
  const htmlDocument = parse(html);
  const linkElements = htmlDocument.querySelectorAll('link');
  if (isEmpty(linkElements)) return;

  removeDomElements(linkElements);

  const stylePaths = linkElements
    .filter(
      linkElement =>
        linkElement.getAttribute('rel') === 'stylesheet' &&
        !urlRegex.test(linkElement.getAttribute('href')),
    )
    .map(linkElement =>
      getAbsoluteFilePath(linkElement.getAttribute('href'), projectRootDirectory),
    );

  if (isEmpty(stylePaths)) return;

  const stylesData = await getFilesData(...stylePaths);

  const inlinedHtml = await inlineCss(htmlDocument.innerHTML, {
    url: ' ',
    extraCss: stylesData,
  });

  await createFile(outputFile, inlinedHtml);

  console.log('Wooohooo, udało się! :D');
});

// inline <ścieżka do html-a> <output html-a>
// TODO -> dodać obsługę zewnętrznych styli
// TODO -> Obsługa błędów i unifikowanie ich sposobu wyświetlania się
