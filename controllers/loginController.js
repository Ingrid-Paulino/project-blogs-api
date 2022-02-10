const { createToken } = require('../services/createToken');
const loginService = require('../services/loginService');

const create = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log('c', { email });
    const token = createToken(email);
    console.log({ token });

    await loginService.create(req.body);

    return res.status(200).json({ token });
} catch (error) {
  console.log({ error });

    next(error);
}
};

module.exports = { create };