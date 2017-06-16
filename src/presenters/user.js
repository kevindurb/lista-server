const log = require('debug')('lista:userSchema');
const userSchema = require('../schemas/user');

module.exports = (data) => (
  userSchema.validate(data, {
    stripUnknown: true,
    abortEarly: false,
  }).value
);
