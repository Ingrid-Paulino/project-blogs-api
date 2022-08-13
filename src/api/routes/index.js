const express = require('express');

const route = express.Router({ mergeParams: true });

const userRouter = require('./userRouter');
const loginRoute = require('./loginRouter');
const categoryRoute = require('./categoryRouter');
const blogPostRoute = require('./blogPostRouter');

route.use('/user', userRouter);
route.use('/login', loginRoute);
route.use('/categories', categoryRoute);
route.use('/post', blogPostRoute);
module.exports = route;
