// import { NextFunction, Request, Response } from 'express';
// import blogPostService from '../services/blogPostService';

// // interface A {
// //   title: string;
// //   content: string;
// //   userId: number;
// // }
// // const create = async (req: Request, res: Response, next: NextFunction) => {
// //   try {
// //     const response = await blogPostService.create(req.body, req.user);
// //     console.log('reqUser', req.user);

// //     const { id, title, content, userId } = response;
// //     return res.status(201).json({ id, title, content, userId });
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// const getAll = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const response = await blogPostService.getAll();

//     return res.status(200).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// const getById = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params;
//     const response = await blogPostService.getById(+id);

//     return res.status(200).json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// // const update = async (req: Request, res: Response, next: NextFunction) => {
// //   const { title, content, categoryIds } = req.body;
// //   const { id } = req.params;
// //   const {
// //     dataValues: { id: idUser },
// //   } = req.user;

// //   try {
// //     const response = await blogPostService.update(
// //       { title, content, categoryIds },
// //       id,
// //       idUser,
// //     );

// //     return res.status(200).json(response);
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// // const deleteBlogPost = async (req: Request, res: Response, next: NextFunction) => {
// //   const { id } = req.params;
// //   const {
// //     dataValues: { id: idUser },
// //   } = req.user;

// //   try {
// //     await blogPostService.deleteBlogPost(id, idUser);

// //     return res.status(204).end();
// //   } catch (error) {
// //     next(error);
// //   }
// // };

// const searchPost = async (req: Request, res: Response, next: NextFunction) => {
//   const { q } = req.query;
//   console.log({ q });

//   try {
//     const result = await blogPostService.searchPost(q);
//     console.log({ result });

//     return res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// export default {
//   // create,
//   getAll,
//   getById,
//   // update,
//   // deleteBlogPost,
//   searchPost,
// };
