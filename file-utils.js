const mkdirp = require('mkdirp');
const _fs = require('fs');
const _path = require('path');
const { getAbsoluteFilePath, displayErr } = require('./utils');

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

const createFile = (path, data) =>
  new Promise(res => {
    const fileDirectoryPath = _path.dirname(path);
    mkdirp(fileDirectoryPath)
      .then(() => {
        _fs.writeFile(path, data, err => {
          if (err) displayErr(`The problem has occured, while creating file`, err);

          res();
        });
      })
      .catch(err => displayErr(`The problem has occured, while creating directories`, err));
  });

module.exports = {
  fileExists,
  getFileData,
  getFilesData,
  createFile,
};
