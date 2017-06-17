const schema = require('../schemas/list');

module.exports = (data) => (
  schema.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  }).value
);
