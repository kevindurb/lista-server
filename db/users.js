const connect = require('connect');

module.exports = {
  getUserById(id) {
    return connect.query('select * from users where id = $1', [id]);
  }
};
