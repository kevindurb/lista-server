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
        ownerId,
      ) values ($1, $2)
      `,
      [
        list.name,
        list.ownerId,
      ]
    );
  }
};
