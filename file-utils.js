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

const getFilesData = (...paths) =>
  new Promise(res => {
    let filesData = '';

    paths.forEach(async (path, pathIndex) => {
      const fileData = await getFileData(path);
      filesData += fileData;

      if (pathIndex === paths.length - 1) res(filesData);
    });
  });

const createFile = (path, data) => {
  // TODO
};

module.exports = {
  fileExists,
  getFileData,
  getFilesData,
  createFile,
};
