const userService = require('../services/userService');

const { createToken } = require('../services/createToken');

const create = async (req, res, next) => {
  try {
    const { email } = req.body;
  const token = createToken(email);
  // console.log({ token });
  await userService.create(req.body);
  
  return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};