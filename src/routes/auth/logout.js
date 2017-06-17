const responses = require('../../utils/responses');

module.exports = (req) => {
  return new Promise((resolve) => {
    req.session.destroy(() => {
      resolve(responses.success());
    });
  });
};
