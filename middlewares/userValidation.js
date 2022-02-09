const { validateError } = require('../utils');
const { UserSchema } = require('../schemas/userSchema');

const userValidate = (reqBodyUser) => {
   const { displayName, email, password, image } = reqBodyUser;
      // validar o usúario
   // Para nn ter que escrever sempre validateUser.error, distruturei error.
  const { error } = UserSchema.validate(reqBodyUser);

  if (error) throw validateError(400, error.message);

  if (error.email) throw validateError(400, '"email" must be a valid email');

  if (displayName.length < 8) {
    const message = '"displayName" length must be at least 8 characters long';
    throw validateError(400, message);
  }

  if (email) {
   throw validateError(400, 'User already required');
  }

  if (!email) {
    throw validateError(400, '"email" is required');
   }
};

module.exports = { userValidate };
