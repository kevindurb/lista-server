const dbu = require('../../utils/db');

module.exports = (req, res) => {
  Promise.resolve(req.db)
    .then(dbu.useCollection('lists'))
    .then(dbu.find())
    .then(dbu.toArray)
    .then((data) => {
      res.send('[]');
    })
};
