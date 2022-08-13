const { User } = require('../models');
const { validateError } = require('../utils');

const create = async (reqBodyUser) => {
  const { email } = reqBodyUser;

  const emailUser = await User.findOne({ where: { email } });
  if (emailUser) throw validateError(409, 'User already registered');

  const response = await User.create(reqBodyUser);

  return response;
};

const getAll = async () => User.findAll({ attributes: { exclude: 'password' } });

const getUserId = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: 'password' } });

    if (!user) throw validateError(404, 'User does not exist');

    return user;
};

const apagarUsuario = async (id) => {
  console.log({ id });
    await User.destroy({ where: { id } });
    return id;
};

module.exports = { create, getAll, getUserId, apagarUsuario };
