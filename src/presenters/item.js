const schema = require('../schemas/item');

module.exports = (data) => (
  schema.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  }).value
);
