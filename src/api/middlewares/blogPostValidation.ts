// import { NextFunction, Request, Response } from 'express';
// import Categorie from '../../db/models/categorie';

// import validateError from '../../app/utils';
// import Schema from '../../app/schemas/userSchema';
// import { throwError } from '../../app/helpers/thowError';

// const blogPostsValidate = (req: Request, res: Response, next: NextFunction) => {
//   const { title, content, categoryIds } = req.body;
//   // validar o usúario
//   // Para nn ter que escrever sempre validateUser.error, distruturei error.
//   const { error } = Schema.BlogPostSchema.validate({ title, content, categoryIds });

//   if (error) throwError('400', error.details[0].message);
  
//   next();
// };

// const validatePostCategory = async (req: Request, res: Response, next: NextFunction) => {
//   const { categoryIds } = req.body;

//   const alreadyExists = await Categorie.findAll({ where: { id: categoryIds } });
//   // console.log('alreadyExists', alreadyExists);

//   if (alreadyExists.length !== categoryIds.length) {
//     // console.log('gggggg');
//     next(validateError(400, '"categoryIds" not found'));
//   }

//   next();
// };

// const validateUpdateBlogPost = (req: Request, res: Response, next: NextFunction) => {
//   const { title, content } = req.body;
 
//   const { error } = Schema.BlogPostSchemaUpdate.validate({ title, content });

//   if (error) throwError(`${error.details[0].message}/400`);
  
//   next();
// };

// export {
//   blogPostsValidate,
//   validatePostCategory,
//   validateUpdateBlogPost,
// };