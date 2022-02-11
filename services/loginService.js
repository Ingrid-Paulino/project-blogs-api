const { User } = require('../models');
const { validateError } = require('../utils');

const create = async ({ email, password }) => {
    const foundUser = await User.findOne({ where: { email, password } });

    if (!foundUser) {
      throw validateError(400, 'Invalid fields'); 
    } 

    const response = await User.create(email, password);

    return response;
};

module.exports = { create };