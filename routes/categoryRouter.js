const express = require('express');

const categoryRoute = express.Router({ mergeParams: true });
const validateJWT = require('../middlewares/auth/validateJWT');

const categoryController = require('../controllers/categoryController');

categoryRoute.use(validateJWT);
categoryRoute.post('/', categoryController.create);

module.exports = categoryRoute;