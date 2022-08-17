import express from 'express';

const blogPostRoute = express.Router({ mergeParams: true });
const validateJWT = require('../middlewares/auth/validateJWT');

const {
    blogPostsValidate,
    validatePostCategory,
    validateUpdateBlogPost,
} = require('../middlewares/blogPostValidation');

// const blogPostsValidate = require('../middlewares/blogPostValidation');
const blogPostController = require('../../app/controllers/blogPostController');

blogPostRoute.use(validateJWT);

blogPostRoute.post('/', blogPostsValidate, validatePostCategory, blogPostController.create);
blogPostRoute.get('/search', blogPostController.searchPost);
blogPostRoute.get('/:id', blogPostController.getById);
blogPostRoute.get('/', blogPostController.getAll);

blogPostRoute.put('/:id', validateUpdateBlogPost, blogPostController.update);
blogPostRoute.delete('/:id', blogPostController.deleteBlogPost);

module.exports = blogPostRoute;