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
      insert into items (
        title,
        list_id,
        description,
        done
      ) values ($1, $2, $3, $4)
      returning *
      `,
      [
        item.title,
        item.listId,
        item.description,
        item.done,
      ]
    ).then(helpers.firstRow)
      .then(helpers.camelize);
  }
};
