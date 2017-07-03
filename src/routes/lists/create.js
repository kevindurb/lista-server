const db = require('../../db');
const responses = require('../../utils/responses');
const session = require('../../utils/session');
const listSchema = require('../../schemas/list');
const listPresenter = require('../../presenters/list');

module.exports = (req) => {
  const result = listSchema.validate(req.body);
  const listData = result.value;

  if (session.isLoggedOut(req)) {
    return responses.notAuthorized();
  }

  listData.ownerId = session.getCurrentUser(req).id;

  if (result.error) {
    return responses.badRequest();
  }

  return db.lists.insertNew(listData)
  .then(result => {
    return responses.created(listPresenter(result));
  });
};
