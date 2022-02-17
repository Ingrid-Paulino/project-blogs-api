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

const getAll = async (req, res, next) => {
  try {
    const response = await userService.getAll();

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await userService.getUserId(id);

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const apagarUsuario = async (req, res, next) => {
  const userId = req.user.id;
  // console.log({ userId });

  try {
    await userService.apagarUsuario(userId);

    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getUserId,
  apagarUsuario,
};
