const blogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
  try {
    const response = await blogPostService.create(req.body, req.user);
    console.log('reqUser', req.user);
    
    const { id, title, content, userId } = response;
    return res.status(201).json({ id, title, content, userId });
  } catch (error) {
      next(error);
  }
};

const getAll = async (req, res, next) => {
    try {
      const response = await blogPostService.getAll();
  
      return res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

const getById = async (req, res, next) => {
try {
    const { id } = req.params;
    const response = await blogPostService.getById(id);

    return res.status(200).json(response);
} catch (error) {
    next(error);
}
};

const update = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.params;
  const { dataValues: { id: idUser } } = req.user;
  
  // console.log({ title, content });
  // console.log({ id });
  // console.log('req', req.body);
  console.log('reqUser', req.user, idUser);

  try {
    const response = await blogPostService.update({ title, content, categoryIds }, id, idUser);
    // console.log({ response });

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    await blogPostService.delete(id);
    // console.log({ response });

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteBlogPost,
};