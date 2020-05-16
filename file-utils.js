const _fs = require('fs');
const _path = require('path');
const { getAbsoluteFilePath } = require('./utils');

const fileExists = path => _fs.existsSync(getAbsoluteFilePath(path));

const getFileData = path =>
  new Promise(res =>
    _fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;

      res(data);
    }),
  );

module.exports = {
  fileExists,
  getFileData,
};
