const jwt = require('jsonwebtoken');

// const { User } = require('../models');

// chave secreta --> armazena-la numa variável de ambiente depois
const SECRET = 'seusecretdetoken';

const createToken = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

    const token = jwt.sign({ data: email }, SECRET, jwtConfig);

    return token;
  };

module.exports = { createToken };