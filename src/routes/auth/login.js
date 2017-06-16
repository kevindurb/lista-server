const log = require('debug')('lista:auth');
const bcrypt = require('bcrypt');

const responses = require('../../utils/responses');
const loginSchema = require('../../schemas/login');
const userPresenter = require('../../presenters/user');

module.exports = (req) => {
  const body = req.body;
  const db = req.db;
  const result = loginSchema.validate(body);
  const credentials = result.value;

  if (result.error) {
    return responses.badRequest();
  }

  log('login: %s', credentials.username);

  return req.db.users.getByUsername(credentials.username)
  .then((user) => {
    if (user) {
      log(credentials.password);
      log(user.passwordDigest);
      return bcrypt.compare(credentials.password, user.passwordDigest)
      .then((matches) => {
        if (matches) {
          req.session.user = user;
          return responses.success(
            userPresenter(user)
          );
        } else {
          return responses.badRequest();
        }
      });
    } else {
      return responses.notFound();
    }
  });
};
