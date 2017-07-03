const db = require('../../db');
const responses = require('../../utils/responses');
const session = require('../../utils/session');
const itemPresenter = require('../../presenters/item');

module.exports = (req) => {
  const listId = req.params.id;

  if (session.isLoggedOut(req)) {
    return responses.notAuthorized();
  }

  const currentUser = session.getCurrentUser(req);

  return db.lists.getById(listId)
  .then((list) => {
    if (list.ownerId === currentUser.id) {
      return db.items.getAllForListId(list.id)
      .then((items) => (
        responses.success(
          items.map(itemPresenter)
        )
      ));
    }
    return responses.notAuthorized();
  });
};
