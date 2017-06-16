const connect = require('./connect');
const helpers = require('./helpers');

module.exports = {
  getUserById(id) {
    return connect.query('select * from users where id = $1', [id])
      .then(helpers.firstRow);
  },
  getUserByUsername(username) {
    return connect.query('select * from users where username = $1', [username])
      .then(helpers.firstRow);
  }
};
