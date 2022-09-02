import { NextFunction, Request, Response } from 'express';
import userService from '../services/userService';
import createToken from '../services/jwtService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const token = createToken(email);
    await userService.create(req.body);

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await userService.getAll();

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

// const getUserId = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const response = await userService.getUserId(+id);

//     return res.status(200).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// // const apagarUsuario = async (req: Request, res: Response, next: NextFunction) => {
// //   const userId = req.user.id;
// //   // console.log({ userId });

// //   try {
// //     await userService.apagarUsuario(userId);

// //     return res.status(204).end();
// //   } catch (error) {
// //     next(error);
// //   }
// // };

export default {
  create,
  getAll,
//   getUserId,
//   // apagarUsuario,
};
