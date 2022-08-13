const { validateError } = require('../utils');
const Schema = require('../schemas/userSchema');

const userValidate = (req, _res, next) => {
  const { displayName, email, password, image } = req.body;
  // validar o usúario
  // Para nn ter que escrever sempre validateUser.error, distruturei error.
  const { error } = Schema.UserSchema.validate({ displayName, email, password, image });

  if (error) throw validateError(400, error.details[0].message);
  
  next();
};

module.exports = { userValidate };
