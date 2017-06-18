const Joi = require('joi');

module.exports = Joi.object({
  id: Joi.number().integer(),
  listId: Joi.string(),
  title: Joi.string(),
  description: Joi.string(),
  done: Joi.boolean(),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
});
