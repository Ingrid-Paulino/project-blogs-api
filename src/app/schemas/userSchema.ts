import * as Joi from 'joi';

const requireMsg = 'Some required fields are missing/400';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': requireMsg,
    'string.empty': requireMsg,
  }),
  password: Joi.string().required().messages({
    'any.required': requireMsg,
    'string.empty': requireMsg,
  }),
}).required();

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': requireMsg,
    // 'string.empty': requireMsg,
    'string.min': '"displayName" length must be at least 8 characters long/400',
  }),
  email: Joi.string().email().required().messages({
    'any.required': requireMsg,
    // 'string.empty': requireMsg,
    'string.email': '"email" must be a valid email/400',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': requireMsg,
    // 'string.empty': requireMsg,
    'string.min': '"password" length must be at least 6 characters long/400',
  }),
  image: Joi.string().required().messages({
    'any.required': requireMsg,
    'string.empty': requireMsg,
  }),
}).required();

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '"name" is required/400',
    'string.empty': requireMsg,
  }),
}).required();

// const BlogPostSchema = Joi.object({
//   title: Joi.string().required(),
//   content: Joi.string().required(),
//   categoryIds: Joi.array().items(Joi.number()).required(),
// });

// const BlogPostSchemaUpdate = Joi.object({
//   title: Joi.string().required(),
//   content: Joi.string().required(),
// });

export default {
  userSchema,
  loginSchema,
  categorySchema,
//   BlogPostSchema,
//   BlogPostSchemaUpdate,
};