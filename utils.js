const _path = require('path');
const currentWorkingDirectory = process.cwd();

const getAbsoluteFilePath = filePath => _path.join(currentWorkingDirectory, filePath);

module.exports = {
  getAbsoluteFilePath,
};
