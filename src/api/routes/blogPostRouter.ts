// import express from 'express';
// import validateJWT from '../middlewares/auth/validateJWT';

// import {
// // blogPostsValidate,
// // validatePostCategory,
// // validateUpdateBlogPost,
// } from '../middlewares/blogPostValidation';

// // const blogPostsValidate = require('../middlewares/blogPostValidation');
// import blogPostController from '../../app/controllers/blogPostController';

// const blogPostRoute = express.Router({ mergeParams: true });

// blogPostRoute.use(validateJWT);

// // blogPostRoute.post('/', blogPostsValidate, validatePostCategory, blogPostController.create);
// blogPostRoute.get('/search', blogPostController.searchPost);
// blogPostRoute.get('/:id', blogPostController.getById);
// blogPostRoute.get('/', blogPostController.getAll);

// // blogPostRoute.put('/:id', validateUpdateBlogPost, blogPostController.update);
// // blogPostRoute.delete('/:id', blogPostController.deleteBlogPost);

// export default blogPostRoute;