// const userService = require('../../services/user/user');

// const create = async (req, res, next) => {
//   // const { displayName, email, password, image } = req.body;

//   const service = await userService.create(req.body);

//   if ('status' in service) return next(service);

//   return res.status(201).json(service);
// };

// module.exports = {
//   create,
// };