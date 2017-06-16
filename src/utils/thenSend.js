const log = require('debug')('lista:response');

module.exports = action => (request, response) => {
  Promise.resolve(request)
    .then(action)
    .then((data) => {
      log(data)
      response.setHeader('Content-Type', 'application/json');
      response.status(data.status || 200).send(JSON.stringify(data.body));
    })
    .catch((error) => {
      log(error);
      response.setHeader('Content-Type', 'application/json');
      response.status(500).end();
    });
};
