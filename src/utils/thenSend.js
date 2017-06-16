const log = require('debug')('lista:error');

module.exports = action => (request, response) => {
  action(request).then((data) => {
    response.status(data.status || 200).send(JSON.stringify(data.body));
  })
  .catch((error) => {
    log(error);
    response.status(500).end();
  });
};
