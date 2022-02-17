const { Op } = require('sequelize');
const { BlogPost, User, Categorie } = require('../models');
const { validateError } = require('../utils');

const create = async (reqBodyBlogPost, reqUser) => {
  const { title, content } = reqBodyBlogPost;
  const { id } = reqUser;
  console.log({ id });
  
    const data = await BlogPost.create({ title, content, userId: id });
    return data;
};

const getAll = async () => {
  const blogPost = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
 });

 return blogPost;
};

const getById = async (id) => {
    const blogPost = await BlogPost.findOne({
        where: { id },
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
   });

   if (!blogPost) throw validateError(404, 'Post does not exist');
  
   return blogPost;
  };

const update = async ({ title, content, categoryIds }, id, idUser) => {
  const idUserLogado = await getById(id);

  if (idUser !== idUserLogado.user.id) throw validateError(401, 'Unauthorized user');
  if (categoryIds) throw validateError(400, 'Categories cannot be edited');

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const blogPost = await BlogPost.findOne({
    where: { id },
    include: [
    { model: Categorie, as: 'categories', through: { attributes: [] } },
],
});

  return blogPost;
};

const deleteBlogPost = async (id, idUser) => {
  const idUserLogado = await getById(id);
  console.log({ idUserLogado });
  if (idUser !== idUserLogado.user.id) throw validateError(401, 'Unauthorized user');

  const deleteUser = await BlogPost.destroy(
    { where: { id } },
  );

  console.log({ deleteUser });

  return deleteUser;
};

const searchPost = async (query) => {
  // fonte: https://github.com/sequelize/sequelize/issues/3095
  const filteredPosts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return filteredPosts || [];
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteBlogPost,
  searchPost,
};