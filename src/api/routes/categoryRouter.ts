import * as express from 'express';
import validateJWT from '../middlewares/auth/validateJWT';

import categoryController from '../../app/controllers/categoryController';

const categoryRoute = express.Router({ mergeParams: true });

categoryRoute.use(validateJWT);
categoryRoute.post('/', categoryController.create);
categoryRoute.get('/', categoryController.getAll);

export default categoryRoute;