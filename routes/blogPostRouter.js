const express = require('express');

const blogPostRoute = express.Router({ mergeParams: true });
const validateJWT = require('../middlewares/auth/validateJWT');

const { blogPostsValidate, validatePostCategory } = require('../middlewares/blogPostValidation');

// const blogPostsValidate = require('../middlewares/blogPostValidation');
const blogPostController = require('../controllers/blogPostController');

blogPostRoute.use(validateJWT);

blogPostRoute.post('/', blogPostsValidate, validatePostCategory, blogPostController.create);
blogPostRoute.get('/', blogPostController.getAll);
// blogPostRoute.get('/:id', blogPostsValidate, validatePostCategory, blogPostController.getById);

module.exports = blogPostRoute;