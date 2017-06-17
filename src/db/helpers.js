const humps = require('humps');

module.exports = {
  getRows: x => x.rows,
  firstRow: x => x.rows[0],
  camelize: x => humps.camelizeKeys(x),
};
