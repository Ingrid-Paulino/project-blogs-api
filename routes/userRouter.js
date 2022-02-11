const express = require('express');

const userRoute = express.Router({ mergeParams: true });

const userValidacao = require('../middlewares/userValidation');
const loginValidate = require('../middlewares/loginValidate');
const userController = require('../controllers/userController');

userRoute.post('/', userValidacao.userValidate, userController.create);

userRoute.get('/', loginValidate.loginValidate, userController.getAll);

module.exports = userRoute;