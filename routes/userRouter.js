const express = require('express');

const userRoute = express.Router({ mergeParams: true });
const validateJWT = require('../middlewares/auth/validateJWT');

const userValidacao = require('../middlewares/userValidation');
const userController = require('../controllers/userController');

userRoute.post('/', userValidacao.userValidate, userController.create);

userRoute.use(validateJWT);
userRoute.get('/', userController.getAll);
userRoute.get('/:id', userController.getUserId);

module.exports = userRoute;