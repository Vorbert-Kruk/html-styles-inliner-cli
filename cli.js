#!/usr/bin/env node
const _path = require('path');
const { getArgValue } = require('./args');
const { getAbsoluteFilePath, urlRegex } = require('./utils');
const { params } = require('./consts');
const { getFileData, getFilesData, createFile } = require('./file-utils');
const { parse } = require('node-html-parser');
const inlineCss = require('inline-css');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(getArgValue(params.output));
const projectRootDirectory = _path.dirname(inputFile);

getFileData(inputFile).then(async html => {
  const htmlDocument = parse(html);

  const linkElements = htmlDocument.querySelectorAll('link');
  if (!linkElements || linkElements.length === 0) return;

  linkElements.forEach(linkElement => linkElement.parentNode.removeChild(linkElement));
  const stylePaths = linkElements
    .filter(
      linkElement =>
        linkElement.getAttribute('rel') === 'stylesheet' &&
        !urlRegex.test(linkElement.getAttribute('rel')),
    )
    .map(linkElement =>
      getAbsoluteFilePath(linkElement.getAttribute('href'), projectRootDirectory),
    );

  if (!stylePaths || stylePaths.length === 0) return;

  const stylesData = await getFilesData(...stylePaths);

  const inlinedHtml = await inlineCss(htmlDocument.innerHTML, {
    url: ' ',
    extraCss: stylesData,
  });

  await createFile(outputFile, inlinedHtml);

  console.log('Wooohooo, udało się! :D');
  // https://www.npmjs.com/package/mkdirp -> Tworzenie folderów
  // https://github.com/cheeriojs/cheerio -> DOM
  // https://www.npmjs.com/package/htmlparser2 -> DOM
});

// inline <ścieżka do html-a> <output html-a>
// TODO -> dodać tworzenie inline css-a z tagów <style />
// TODO -> dodać obsługę zewnętrznych styli
// TODO -> Obsługa błędów i unifikowanie ich sposobu wyświetlania się
