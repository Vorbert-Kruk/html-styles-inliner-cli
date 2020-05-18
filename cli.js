#!/usr/bin/env node
require('./validation');
const _path = require('path');
const inlineCss = require('inline-css');
const isEmpty = require('lodash.isempty');
const { parse } = require('node-html-parser');

const { getArgValue } = require('./modules/args');
const { getAbsoluteFilePath, urlRegex, removeDomElements } = require('./modules/utils');
const { params, baseOutputFilePrefix } = require('./modules/consts');
const { getFileData, getFilesData, createFile } = require('./modules/file-utils');

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

  console.log(`Inlined html has been successfully!\r\nPath to the file: ${outputFile}`);
});
