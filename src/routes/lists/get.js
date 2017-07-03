const db = require('../../db');
const responses = require('../../utils/responses');
const session = require('../../utils/session');
const listPresenter = require('../../presenters/list');

module.exports = (req) => {
  if (session.isLoggedOut(req)) {
    return responses.notAuthorized();
  }

  const ownerId = session.getCurrentUser(req).id;

  return db.lists.getAllForOwner(ownerId)
  .then(result => {
    return responses.success(
      result.map(listPresenter)
    );
  });
};
