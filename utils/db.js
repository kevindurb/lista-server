module.exports = {
  useCollection: name => db => db.collection(name),
  find: (query = {}) => collection => collection.find(query),
  toArray: cursor => (
    new Promise((resolve, reject) => {
      cursor.toArray((err, docs) => {
        if (err) {
          reject(err);
        } else {
          resolve(docs);
        }
      });
    })
  ),
};
