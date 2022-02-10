const jwt = require('jsonwebtoken');

// const { User } = require('../models');

// chave secreta --> armazena-la numa variável de ambiente depois
const SECRET = 'seusecretdetoken';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = (email) => {
    const token = jwt.sign({ data: email }, SECRET, jwtConfig);
    // console.log(token);

    return token;
  };

module.exports = { createToken };