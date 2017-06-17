const R = require('ramda');
const log = require('debug')('lista:users');
const bcrypt = require('bcrypt');

const responses = require('../../utils/responses');
const userSchema = require('../../schemas/user');
const userPresenter = require('../../presenters/user');

module.exports = (req) => {
  const db = req.db;
  const result = userSchema.validate(req.body);
  const user = result.value;

  if (result.error) {
    return responses.badRequest();
  }

  return bcrypt.hash(user.password, 10)
    .then((passwordDigest) => {
      return db.users.insertNew(R.merge(
        user,
        R.objOf('passwordDigest', passwordDigest)
      ));
    })
    .then((user) => {
      return responses.success(
        userPresenter(user)
      );
    })
    .catch((error) => {
      log(error);
      return responses.badRequest();
    })
};
