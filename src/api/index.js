const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParse.json());

const error = require('./middlewares/error');
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(routes);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
