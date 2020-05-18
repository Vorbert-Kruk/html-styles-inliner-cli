const _path = require('path');
const currentWorkingDirectory = process.cwd();

const getAbsoluteFilePath = (filePath, rootDirectory = currentWorkingDirectory) =>
  !!filePath ? _path.join(rootDirectory, filePath) : undefined;

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
const quoteMarksRegex = /[`"']/g;

const removeQuoteMarks = text => text.replace(quoteMarksRegex, '');

const displayErr = (message, err) => {
  throw new Error(`${message}: ${err}`);
};

const removeDomElement = element => element.parentNode.removeChild(element);

const removeDomElements = elements => elements.forEach(element => removeDomElement(element));

module.exports = {
  getAbsoluteFilePath,
  urlRegex,
  quoteMarksRegex,
  removeQuoteMarks,
  displayErr,
  removeDomElement,
  removeDomElements,
};
