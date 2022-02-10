const express = require('express');
const userValidacao = require('../middlewares/userValidation');

const userRoute = express.Router({ mergeParams: true });

const userController = require('../controllers/userController');

userRoute.post('/', userValidacao.userValidate, userController.create);

module.exports = userRoute;