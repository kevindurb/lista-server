const humps = require('humps');

module.exports = {
  firstRow: (x) => x[0],
  camelize: (x) => humps.camelizeKeys(x),
};
