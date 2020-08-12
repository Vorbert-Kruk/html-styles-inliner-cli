const params = {
  input: {
    name: 'input',
    type: String,
  },
  output: {
    name: 'output',
    type: String,
  },
};

const fileExtensions = {
  html: '.html',
  css: '.css',
};

const baseOutputFilePrefix = 'inlined-';

module.exports = {
  params,
  fileExtensions,
  baseOutputFilePrefix,
};
