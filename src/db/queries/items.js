const pool = require('../pool');
const helpers = require('../helpers');

module.exports = {
  getAllForListId(listId) {
    return pool.query(
      'select * from items where list_id = $1',
      [listId]
    ).then(helpers.getRows)
      .then(helpers.camelize);
  },
  insertNew(item) {
    return pool.query(
      `
      insert into lists (
        title,
        list_id
      ) values ($1, $2)
      returning *
      `,
      [
        item.title,
        item.listId,
      ]
    ).then(helpers.firstRow)
      .then(helpers.camelize);
  }
};
