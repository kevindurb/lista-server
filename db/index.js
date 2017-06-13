const MongoClient = require('mongodb').MongoClient;

let connection;

module.exports = {
  provider: (mongoUrl) => (req, res, next) => {
    if (connection) {
      req.db = connection;
      next();
    } else {
      MongoClient.connect(mongoUrl, (err, db) => {
        if (err) {
          throw new Error(err);
        }

        connection = db;
        req.db = db;
        next();
      });
    }
  }
};
