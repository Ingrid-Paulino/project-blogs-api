const { User } = require('../models');
const { validateError } = require('../utils');

const create = async (reqBodyLogin) => {
    const { email } = reqBodyLogin;
    console.log({ email });
    const emailUser = await User.findOne({ where: { email } });
    console.log('a', { emailUser });

    if (!emailUser) throw validateError(400, 'Invalid fields');
    console.log('b', { emailUser });

    const response = await User.create(reqBodyLogin);
    console.log({ response });

    return response;
};

module.exports = { create };