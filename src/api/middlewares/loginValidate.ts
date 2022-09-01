// import { NextFunction, Request, Response } from 'express';
// import Schema from '../../app/schemas/userSchema';
// import { throwError } from '../../app/helpers/thowError';

// const loginValidate = (req: Request, res: Response, next: NextFunction) => {
//   const { email, password } = req.body;
//   // validar o usúario
//   // Para nn ter que escrever sempre validateUser.error, distruturei error.
//   const { error } = Schema.LoginSchema.validate({ email, password });

//   if (error) throwError(`${error.details[0].message}/400`);

//   next();
// };

// export default { loginValidate };
