const express = require('express');

const route = express.Router({ mergeParams: true });

const userRouter = require('./userRouter');
const loginRoute = require('./loginRouter');

route.use('/user', userRouter);
route.use('/login', loginRoute);

module.exports = route;
