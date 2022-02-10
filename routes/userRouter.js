const express = require('express');

const userRoute = express.Router({ mergeParams: true });

const userValidacao = require('../middlewares/userValidation');
const userController = require('../controllers/userController');

userRoute.post('/', userValidacao.userValidate, userController.create);

module.exports = userRoute;