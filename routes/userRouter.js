const express = require('express');

const userRoute = express.Router({ mergeParams: true });
const validateJWT = require('../middlewares/auth/validateJWT');

const userValidacao = require('../middlewares/userValidation');
// const tokenValidate = require('../middlewares/tokenValidate');
const userController = require('../controllers/userController');

userRoute.post('/', userValidacao.userValidate, userController.create);

userRoute.get('/', validateJWT, userController.getAll);
userRoute.get('/:id', validateJWT, userController.getUserId);

module.exports = userRoute;