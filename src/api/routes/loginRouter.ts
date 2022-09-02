import * as express from 'express';
// import loginValidate from '../middlewares/loginValidate';
import loginController from '../../app/controllers/loginController';

const loginRoute = express.Router({ mergeParams: true });

loginRoute.post('/', loginController.createLogin);

export default loginRoute;