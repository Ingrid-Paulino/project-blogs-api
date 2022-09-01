// import User from '../../db/models/user';
// import { throwError } from '../helpers/thowError';

// const create = async (reqBodyUser: any) => {
//   const { email } = reqBodyUser;

//   const emailUser = await User.findOne({ where: { email } });
//   if (emailUser) throwError('User already registered/409');
//   console.log('oi', emailUser);
  
//   const response = await User.create(reqBodyUser);

//   return response;
// };

// const getAll = async () => User.findAll({ 
//   attributes: { 
//     exclude: ['password'],
//   },
// });

// const getUserId = async (id: number) => {
//   const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

//   if (!user) throwError('User does not exist/404');

//   return user;
// };

// const apagarUsuario = async (id: number) => {
//   console.log({ id });
//   await User.destroy({ where: { id } });
//   return id;
// };

// export default { create, getAll, getUserId, apagarUsuario };
