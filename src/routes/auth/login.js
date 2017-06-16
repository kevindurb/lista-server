const log = require('debug')('lista:auth');
const bcrypt = require('bcrypt');
const responses = require('../../utils/responses');

module.exports = (req) => {
  const username = req.body.username;
  const password = req.body.password;

  log('login: %s', username);

  return req.db.users.getByUsername(username)
  .then((user) => {
    if (user) {
      bcrypt.compare(password, user.passwordDigest)
      .then((matches) => {
        if (matches) {
          req.session.user = user;
          return responses.success(user);
        } else {
          return responses.badRequest();
        }
      });
    } else {
      return responses.notFound();
    }
  });
};
