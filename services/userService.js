const { UserModel } = require('../models');

const create = async (reqBodyUser) => {
  // const { displayName, email, password, image } = reqBodyUser;

  const newUser = await UserModel.create(reqBodyUser);

  const { password: _, ...userCreated } = newUser.dataValues;

  console.log(userCreated);

  return newUser;
};

module.exports = { create };
