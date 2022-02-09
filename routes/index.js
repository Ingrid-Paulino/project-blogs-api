const express = require('express');

const route = express.Router({ mergeParams: true });

const userRouter = require('./routes/user/user');

route.use('/user', userRouter);

module.exports = route;
