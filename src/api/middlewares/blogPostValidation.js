const { Categorie } = require('../../db/models');

const { validateError } = require('../../app/utils');
const Schema = require('../schemas/userSchema');

const blogPostsValidate = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  // validar o usúario
  // Para nn ter que escrever sempre validateUser.error, distruturei error.
  const { error } = Schema.BlogPostSchema.validate({ title, content, categoryIds });

  if (error) throw validateError(400, error.details[0].message);
  
  next();
};

const validatePostCategory = async (req, _res, next) => {
  const { categoryIds } = req.body;

  const alreadyExists = await Categorie.findAll({ where: { id: categoryIds } });
  // console.log('alreadyExists', alreadyExists);

  if (alreadyExists.length !== categoryIds.length) {
    // console.log('gggggg');
    next(validateError(400, '"categoryIds" not found'));
  }

  next();
};

const validateUpdateBlogPost = (req, res, next) => {
  const { title, content } = req.body;
 
  const { error } = Schema.BlogPostSchemaUpdate.validate({ title, content });

  if (error) throw validateError(400, error.details[0].message);
  
  next();
};

module.exports = {
  blogPostsValidate,
  validatePostCategory,
  validateUpdateBlogPost,
};