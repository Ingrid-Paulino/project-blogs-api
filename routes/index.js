const express = require('express');

const route = express.Router({ mergeParams: true });

const userRouter = require('./userRouter');
const loginRoute = require('./loginRouter');
const categoryRoute = require('./categoryRouter');

route.use('/user', userRouter);
route.use('/login', loginRoute);
route.use('/categories', categoryRoute);
module.exports = route;
