const { User } = require('../models');

const { validateError } = require('../utils');

const create = async (reqBodyUser) => {
  const { email } = reqBodyUser;

  const emailUser = await User.findOne({ where: { email } });
  if (emailUser) throw validateError(409, 'User already registered');

  const response = await User.create(reqBodyUser);

  return response;
};

module.exports = { create };
