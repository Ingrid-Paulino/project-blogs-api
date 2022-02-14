const { BlogPost, User, Categorie } = require('../models');
const { validateError } = require('../utils');

const create = async (reqBodyBlogPost, reqUser) => {
  const { title, content } = reqBodyBlogPost;
  const { id } = reqUser;
  
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
          { model: Categorie, as: 'categories' },
      ],
   });

   if (!blogPost) throw validateError(404, 'Post does not exist');
  
   return blogPost;
  };

module.exports = { create, getAll, getById };