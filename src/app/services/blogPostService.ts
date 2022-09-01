// import { Op } from 'sequelize';

// import BlogPost from '../../db/models/blogpost';
// import User from '../../db/models/user';
// import Categorie from '../../db/models/categorie';
// import { throwError } from '../helpers/thowError';

// const create = async (reqBodyBlogPost: any, reqUser: any) => {
//   const { title, content } = reqBodyBlogPost;
//   const { id } = reqUser;
//   console.log({ id });

//   const data = await BlogPost.create({ title, content, userId: id });
//   return data;
// };

// const getAll = async () => {
//   const blogPost = await BlogPost.findAll({
//     attributes: { exclude: ['UserId'] },
//     include: [
//       { model: User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: Categorie, as: 'categories', through: { attributes: [] } },
//     ],
//   });

//   return blogPost;
// };

// const getById = async (id: number) => {
//   const blogPost = await BlogPost.findOne({
//     where: { id },
//     include: [
//       { model: User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: Categorie, as: 'categories', through: { attributes: [] } },
//     ],
//   });

//   if (!blogPost) throwError('Post does not exist/404');

//   return blogPost;
// };

// // const update = async ({ title, content, categoryIds }: any, id: number, idUser: number) => {
// //   const idUserLogado = await getById(id);

// //   if (idUser !== idUserLogado.user.id) throwError('Unauthorized user/401');
// //   if (categoryIds) throwError('Categories cannot be edited/400');

// //   await BlogPost.update(
// //     { title, content },
// //     { where: { id } },
// //   );

// //   const blogPost = await BlogPost.findOne({
// //     where: { id },
// //     include: [
// //       { model: Categorie, as: 'categories', through: { attributes: [] } },
// //     ],
// //   });

// //   return blogPost;
// // };

// // const deleteBlogPost = async (id: number, idUser: number) => {
// //   const idUserLogado = await getById(id);
// //   console.log({ idUserLogado });
// //   if (idUser !== idUserLogado.user.id) throwError('Unauthorized user/401');

// //   const deleteUser = await BlogPost.destroy(
// //     { where: { id } },
// //   );

// //   console.log({ deleteUser });

// //   return deleteUser;
// // };

// const searchPost = async (query: any) => {
//   // fonte: https://github.com/sequelize/sequelize/issues/3095
//   const filteredPosts = await BlogPost.findAll({
//     where: {
//       [Op.or]: [
//         { title: { [Op.like]: `%${query}%` } },
//         { content: { [Op.like]: `%${query}%` } },
//       ],
//     },
//     include: [
//       { model: User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: Categorie, as: 'categories', through: { attributes: [] } },
//     ],
//   });

//   return filteredPosts || [];
// };

// export default {
//   create,
//   getAll,
//   getById,
//   // update,
//   // deleteBlogPost,
//   searchPost,
// };