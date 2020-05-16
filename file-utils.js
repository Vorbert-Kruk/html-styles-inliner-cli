const _fs = require('fs');
const _path = require('path');

const currentWorkingDirectory = process.cwd();

const fileExists = path => _fs.existsSync(_path.join(currentWorkingDirectory, path));

module.exports = {
  fileExists,
};
