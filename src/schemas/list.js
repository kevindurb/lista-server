const Joi = require('joi');

module.exports = Joi.object({
  id: Joi.number().integer(),
  ownerId: Joi.string(),
  name: Joi.string(),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
});
