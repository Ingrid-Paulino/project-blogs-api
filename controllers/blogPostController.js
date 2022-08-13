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

  try {
    const response = await blogPostService.update({ title, content, categoryIds }, id, idUser);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  const { id } = req.params;
  const { dataValues: { id: idUser } } = req.user;

  try {
    await blogPostService.deleteBlogPost(id, idUser);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const searchPost = async (req, res, next) => {
  const { q } = req.query;
  console.log({ q });

  try {
    const result = await blogPostService.searchPost(q);
    console.log({ result });

    return res.status(200).json(result);
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
  searchPost,
};