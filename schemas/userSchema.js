const Joi = require('joi');

const UserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),
});

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const TokenSchema = Joi.string().token();

module.exports = {
  UserSchema,
  LoginSchema,
  TokenSchema,
};