const db = require('./');

module.exports = (req, res, next) => {
  req.db = db;
  next();
};
