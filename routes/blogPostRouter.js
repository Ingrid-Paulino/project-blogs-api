const express = require('express');

const blogPostRoute = express.Router({ mergeParams: true });
const validateJWT = require('../middlewares/auth/validateJWT');

const {
    blogPostsValidate,
    validatePostCategory,
    validateUpdateBlogPost,
} = require('../middlewares/blogPostValidation');

// const blogPostsValidate = require('../middlewares/blogPostValidation');
const blogPostController = require('../controllers/blogPostController');

blogPostRoute.use(validateJWT);

blogPostRoute.post('/', blogPostsValidate, validatePostCategory, blogPostController.create);
blogPostRoute.get('/', blogPostController.getAll);
blogPostRoute.get('/:id', blogPostController.getById);
blogPostRoute.put('/:id', validateUpdateBlogPost, blogPostController.update);
blogPostRoute.delete('/:id', blogPostController.deleteBlogPost);

module.exports = blogPostRoute;