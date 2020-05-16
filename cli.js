#!/usr/bin/env node
const _path = require('path');
const { getArgValue } = require('./args');
const { getAbsoluteFilePath, urlRegex } = require('./utils');
const { params } = require('./consts');
const { getFileData, getFilesData } = require('./file-utils');
const { parse } = require('node-html-parser');

const inputFile = getAbsoluteFilePath(getArgValue(params.input));
const outputFile = getAbsoluteFilePath(getArgValue(params.output));
const projectRootDirectory = _path.dirname(inputFile);

getFileData(inputFile).then(async html => {
  const htmlDocument = parse(html);
  const documentHead = htmlDocument.querySelector('head');
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

  documentHead.insertAdjacentHTML('afterbegin', `<style></style>`);
  documentHead.querySelector('style').set_content(stylesData);

  await createFile(outputFile, htmlDocument.innerHTML);

  console.log('Wooohooo, udało się! :D');
});

console.log('Nie wydupcyłem się c:');

// inline <ścieżka do html-a> <output html-a>
