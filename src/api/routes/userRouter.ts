import * as express from 'express';
import validateJWT from '../middlewares/auth/validateJWT';

// import userValidacao from '../middlewares/userValidation';
import userController from '../../app/controllers/userController';

const userRoute = express.Router({ mergeParams: true });

userRoute.post('/', userController.create);

userRoute.use(validateJWT);
userRoute.get('/', userController.getAll);
// userRoute.get('/:id', userController.getUserId);
// // userRoute.delete('/me', userController.apagarUsuario);

export default userRoute;