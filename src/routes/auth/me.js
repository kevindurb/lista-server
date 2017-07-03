const db = require('../../db');
const responses = require('../../utils/responses');
const session = require('../../utils/session');
const userPresenter = require('../../presenters/user');

module.exports = (req) => {
  if (session.isLoggedOut(req)) {
    return responses.notAuthorized();
  }

  const id = session.getCurrentUser(req).id;

  return db.users.getById(id)
  .then(result => {
    req.session.user = result;
    return responses.success(
      userPresenter(result)
    );
  });
};
