const blogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
  try {
    const response = await blogPostService.create(req.body, req.user);
    
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

module.exports = { create, getAll, getById };