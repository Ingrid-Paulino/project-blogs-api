import express from 'express';
import bodyParse from 'body-parser';
import routes from './routes';
import error from './middlewares/errorHandler';

const api = express();
api.use(bodyParse.json());

// não remova esse endpoint, e para o avaliador funcionar
api.get('/', (request, response) => {
  response.send();
});

api.use(routes);

api.use(error);

api.listen(3000, () => console.log('ouvindo porta 3000!'));
