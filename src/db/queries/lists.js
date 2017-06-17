const log = require('debug')('lista:listsQueries');
const pool = require('../pool');
const helpers = require('../helpers');

module.exports = {
  getAllForOwner(ownerId) {
    return pool.query('select * from lists where ownerId = $1', [ownerId])
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
