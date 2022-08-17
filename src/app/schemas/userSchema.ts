import Joi from 'joi';

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

const BlogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const BlogPostSchemaUpdate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

export = {
  UserSchema,
  LoginSchema,
  BlogPostSchema,
  BlogPostSchemaUpdate,
};