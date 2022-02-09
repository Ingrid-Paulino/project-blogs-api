const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./api/server');

const app = express();
app.use(bodyParse.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(routes);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
