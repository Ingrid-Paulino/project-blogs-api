const express = require('express');

// const validateJWT = require('../middlewares/auth/validateJWT');

const loginRoute = express.Router({ mergeParams: true });

const loginValidate = require('../middlewares/loginValidate');
const loginController = require('../controllers/loginController');

loginRoute.post('/', loginValidate.loginValidate, loginController.create);

module.exports = loginRoute;