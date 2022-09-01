// import { NextFunction, Request, Response } from 'express';
// import { throwError } from '../../app/helpers/thowError';

// import Schema from '../../app/schemas/userSchema';

// const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;

//   const { error } = Schema. TokenSchema.validate(token);

//   if (error) throwError(`${error.details[0].message}/401`);

//   next();
// };

// export default { tokenValidate };