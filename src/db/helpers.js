const humps = require('humps');

module.exports = {
  firstRow: (x) => x.rows[0],
  camelize: (x) => humps.camelizeKeys(x),
};
