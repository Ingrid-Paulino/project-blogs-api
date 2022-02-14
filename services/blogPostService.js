const { BlogPost, User, Categorie } = require('../models');
const { validateError } = require('../utils');

// const create = async (reqBodyBlogPost, id) => {
//   const { title, content, categoryIds } = reqBodyBlogPost;

//   const alreadyExists = await Categorie.findAll({ where: { id: categoryIds } });

//   if (alreadyExists.length !== categoryIds.length) {
//     throw validateError(400, '"categoryIds" not found');
//   } 
  
//     const blogPost = await BlogPost.create({ title, content, userId: id });
//     return blogPost;
// };

const create = async (reqBodyBlogPost, reqUser) => {
  const { title, content } = reqBodyBlogPost;
  const { id } = reqUser;
  
    const data = await BlogPost.create({ title, content, userId: id });
    return data;
};

const getAll = async () => {
  const blogPost = await BlogPost.findAll({
      include: [
        { model: User, as: 'users', attributes: { exclude: ['passwor'] } },
        { model: Categorie, as: 'categories' },
    ],
 });

 return blogPost;
};

const getById = async (id) => {
    const blogPost = await BlogPost.findOne({
        where: { id },
        include: [
          { model: User, as: 'users', attributes: { exclude: ['passwor'] } },
          { model: Categorie, as: 'categories' },
      ],
   });

   if (!blogPost) throw validateError(404, 'Post does not exist');
  
   return blogPost;
  };

module.exports = { create, getAll, getById };