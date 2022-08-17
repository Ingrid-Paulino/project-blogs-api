// const errorMiddlewate = (err, _req, res, _next) => {
//   //  console.error('err', err);

//   if (err.status) {
//     return res.status(err.status).json({ message: err.message });
//   }

//   // if ('status' in err) {
//   //   return res.status(err.status).send({ message: err.message });
//   // }

//   return res.status(500).json({
//     error: {
//       message: err.message,
//     },
//   });
// };

// module.exports = errorMiddlewate;

import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  { message }: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const [msg, status, token] = message.split('/');
  return res
    .status(Number(status))
    .json({ [token ? 'error' : 'message']: msg });
};
export default errorHandler;
