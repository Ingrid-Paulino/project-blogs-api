// import { NextFunction, Request, Response } from 'express';
// import categoryService from '../services/categoryService';

// const create = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { name } = req.body;

//     const response = await categoryService.create(name);
//     // console.log({ response });
//     return res.status(201).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// const getAll = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const response = await categoryService.getAll();

//     return res.status(200).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// export default { create, getAll };