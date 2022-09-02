// import { NextFunction, Request, Response } from 'express';
// import Schema from '../../app/schemas/userSchema';
// import { throwError } from '../../app/helpers/thowError';

// const userValidate = (req: Request, res: Response, next: NextFunction) => {
//   const { displayName, email, password, image } = req.body;
//   // validar o usúario
//   // Para nn ter que escrever sempre validateUser.error, distruturei error.
//   const { error } = Schema.UserSchema.validate({ displayName, email, password, image });

//   if (error) throwError(`${error.details[0].message}/400`);
  
//   next();
// };

// export default { userValidate };
