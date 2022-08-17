const express = require('express');

const loginRoute = express.Router({ mergeParams: true });

const loginValidate = require('../middlewares/loginValidate');
const loginController = require('../../app/controllers/loginController');

loginRoute.post('/', loginValidate.loginValidate, loginController.create);

module.exports = loginRoute;