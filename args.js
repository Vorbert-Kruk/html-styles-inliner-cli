const getArgValue = argName => {
  const args = process.argv.slice(2);
  const argIndex = args.indexOf(`--${argName}`);

  if (argIndex !== -1 && args[argIndex + 1] !== undefined) {
    return args[argIndex + 1];
  }

  return null;
};

module.exports = {
  getArgValue,
};
