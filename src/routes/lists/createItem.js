const db = require('../../db');
const responses = require('../../utils/responses');
const session = require('../../utils/session');
const itemSchema = require('../../schemas/item');
const itemPresenter = require('../../presenters/item');

module.exports = (req) => {
  const listId = req.params.id;
  const result = itemSchema.validate(req.body);
  const itemData = result.value;

  if (session.isLoggedOut(req)) {
    return responses.notAuthorized();
  }

  if (result.error) {
    return responses.badRequest();
  }

  const currentUser = session.getCurrentUser(req);

  return db.lists.getById(listId)
  .then((list) => {
    if (list.ownerId === currentUser.id) {
      itemData.listId = listId;
      return db.items.insertNew(itemData)
      .then((result) => (
        responses.success(
          itemPresenter(result)
        )
      ));
    }
    return responses.notAuthorized();
  });
};
