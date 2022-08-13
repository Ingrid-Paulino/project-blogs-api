const { validateError } = require('../utils');
const Schema = require('../schemas/userSchema');

const loginValidate = (req, res, next) => {
      const { email, password } = req.body;
      // validar o usúario
      // Para nn ter que escrever sempre validateUser.error, distruturei error.
      const { error } = Schema.LoginSchema.validate({ email, password });
    
      if (error) throw validateError(400, error.details[0].message);
      
      next();
    };
    
    module.exports = { loginValidate };