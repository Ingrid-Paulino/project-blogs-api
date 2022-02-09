const userService = require('../services/userService');
const { userValidate } = require('../middlewares/userValidation');

const create = async (req, res, _next) => {
  // const { displayName, email, password, image } = req.body;

  const newUser = await userService.create(req.body);
  await userValidate(req.body);

  // if ('status' in newUser) return next(newUser);

  return res.status(201).json(newUser);
};

module.exports = {
  create,
};