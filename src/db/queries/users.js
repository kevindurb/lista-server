const pool = require('../pool');
const helpers = require('../helpers');

module.exports = {
  getById(id) {
    return pool.query('select * from users where id = $1', [id])
      .then(helpers.firstRow)
      .then(helpers.camelize);
  },
  getByUsername(username) {
    return pool.query('select * from users where username = $1', [username])
      .then(helpers.firstRow)
      .then(helpers.camelize);
  },
  insertNew(user) {
    return pool.query(
      `
      insert into users (
        username,
        name,
        password_digest
      ) values ($1, $2, $3)
      returning *
      `,
      [
        user.username,
        user.name,
        user.passwordDigest
      ]
    ).then(helpers.firstRow)
      .then(helpers.camelize);
  }
};
