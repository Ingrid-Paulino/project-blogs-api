import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken';

// chave secreta --> armazena-la numa variável de ambiente depois
const SECRET: Secret = 'seusecretdetoken';

const createToken = (email: string) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { email } }, SECRET, jwtConfig);

  return token;
};

export default createToken;