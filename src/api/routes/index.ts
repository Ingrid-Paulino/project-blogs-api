import * as express from 'express';

// import categoryRoute from './categoryRouter';
// import blogPostRoute from './blogPostRouter';
import userRouter from './userRouter';
import loginRoute from './loginRouter';

const route = express.Router({ mergeParams: true });

route.use('/user', userRouter);
route.use('/login', loginRoute);
// route.use('/categories', categoryRoute);
// route.use('/post', blogPostRoute);
export default route;
