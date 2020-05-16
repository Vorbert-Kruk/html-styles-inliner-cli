const { minArgsQuantity } = require('./consts');
const argsAreValid = () => !!process.args && process.args.length > minArgsQuantity;

module.exports = {
  argsAreValid,
};
