import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';

import User from '../../../db/models/user';
import 'dotenv/config';
import { DecodeData } from '../../../app/types';

// Mesma chave privada que usamos para criptografar o token.
const SECREAT: Secret = 'seusecretdetoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  // ou
  // const { authorization } = req.headers;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    // if (!token || token === '') {
    //   // arrumar isso depois
    //   return next({ status: 401, message: 'Token not found/401' });
    // }
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, SECREAT) as DecodeData;
    // console.log('decoded', decoded);
    const user = await User.findOne({ where: { email: decoded.data.email } });
    // console.log('decoded', user);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    
    // req.email = decoded.data;
    // ou se não tivesse o decode.data.email la no findOne
    // req.user = user; usado sem ts
    // ou
    // res.locals.user = { user };

    // console.log('req', req);
    req.body = { ...req.body, user }; // use assim com ts
    // console.log('body', req.body);

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};