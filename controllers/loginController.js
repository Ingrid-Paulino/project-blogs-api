const { createToken } = require('../services/createToken');
const loginService = require('../services/loginService');

const create = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = createToken(email);

    await loginService.create({ email, password });

    return res.status(200).json({ token });
} catch (error) {
  console.log({ error });
    next(error);
}
};

module.exports = { create };
