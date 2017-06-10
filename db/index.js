const MongoClient = require('mongodb').MongoClient;

let connection;

module.exports = {
  provider(req, res, next) {
    if (connection) {
      req.db = connection;
      next();
    } else {
      MongoClient.connect(process.env.MONGO_URL, (err, db) => {
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
