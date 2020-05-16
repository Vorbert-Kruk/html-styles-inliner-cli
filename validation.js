const { minArgsQuantity } = require('./consts');
const argsAreValid = () => !!process.argv && process.argv.slice(2).length >= minArgsQuantity;

module.exports = {
  argsAreValid,
};
