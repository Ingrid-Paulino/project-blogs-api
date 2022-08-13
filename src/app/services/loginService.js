const { User } = require('../models');
const { validateError } = require('../utils');

const { createToken } = require('./createToken');

const create = async ({ email, password }) => {
    const foundUser = await User.findOne({ where: { email } });

    if (!foundUser || foundUser.password !== password) {
      throw validateError(400, 'Invalid fields'); 
    }
    console.log({ foundUser });

    const token = createToken(email);

    return token;
};

module.exports = { create };