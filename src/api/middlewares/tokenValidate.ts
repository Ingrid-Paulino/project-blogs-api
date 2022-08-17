const { validateError } = require('../../app/utils');
const Schema = require('../../app/schemas/userSchema');

const tokenValidate = (req, res, next) => {
      const token = req.headers.authorization;

      const { error } = Schema.TokenSchema.validate(token);
    
      if (error) throw validateError(401, error.details[0].message);
      
      next();
    };
    
module.exports = { tokenValidate };