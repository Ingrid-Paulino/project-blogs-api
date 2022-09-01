// import { NextFunction, Request, Response } from 'express';
// import jwt, { Secret } from 'jsonwebtoken';
// // import User from '../../../db/models/user';

// // Mesma chave privada que usamos para criptografar o token.
// const SEGREDO: Secret = 'seusecretdetoken';

// export default async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;
//   // ou
//   // const { authorization } = req.headers;

//   if (!token) {
//     return res.status(401).json({ message: 'Token not found' });
//   }

//   try {
//     /* Através o método verify, podemos validar e decodificar o nosso JWT. */
//     const decoded = jwt.verify(token, SEGREDO);
//     console.log('decoded', decoded);

//     // const user = await User.findOne({ where: { email: decoded.data } });
//     // console.log('decoded', user);

//     // if (!user) {
//     //   return res.status(404).json({ message: 'User does not exist' });
//     // }
    
//     // req.email = decoded.data;
//     // ou se não tivesse o decode.data.email la no findOne
//     // req.user = user;

//     // res.locals.user = { user };

//     // console.log('req', req);
    
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }
// };