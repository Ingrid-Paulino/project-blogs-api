const Joi = require('joi');

const UserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().min(6)
    .message('"password" length must be 6 characters long')
    .max(6)
    .message('"password" length must be 6 characters long')
    .required(),
});

module.exports = UserSchema;