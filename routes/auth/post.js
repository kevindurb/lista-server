const log = require('debug')('lista:auth');
const bcrypt = require('bcrypt');
const user = require('../../db/users');

module.exports = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  log('user: %s', username);

  user.getUserByUsername(username)
  .then((user) => {
    if (user) {
      bcrypt.compare(password, user.passwordHash)
      .then((matches) => {
        if (matches) {
          req.session.user = user;
          res.status(200).send(JSON.stringify(user));
        } else {
          res.status(400).send('Bad Request');
        }
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
};
