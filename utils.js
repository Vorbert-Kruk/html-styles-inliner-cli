const _path = require('path');
const currentWorkingDirectory = process.cwd();

const getAbsoluteFilePath = filePath => _path.join(currentWorkingDirectory, filePath);
const hrefRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/;

module.exports = {
  getAbsoluteFilePath,
  hrefRegex,
};
