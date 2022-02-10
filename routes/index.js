const express = require('express');

const route = express.Router({ mergeParams: true });

const userRouter = require('./userRouter');

route.use('/user', userRouter);

module.exports = route;
