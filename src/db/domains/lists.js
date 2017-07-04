const pool = require('../pool');
const helpers = require('../helpers');

module.exports = {
  getAllForOwner(ownerId) {
    return pool.query('select * from lists where owner_id = $1', [ownerId])
      .then(helpers.getRows)
      .then(helpers.camelize);
  },
  getById(id) {
    return pool.query('select * from lists where id = $1', [id])
      .then(helpers.firstRow)
      .then(helpers.camelize);
  },
  insertNew(list) {
    return pool.query(
      `
      insert into lists (
        name,
        owner_id
      ) values ($1, $2)
      returning *
      `,
      [
        list.name,
        list.ownerId,
      ]
    ).then(helpers.firstRow)
      .then(helpers.camelize);
  }
};
