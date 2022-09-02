import User from '../../db/models/user';
import Schemas from '../schemas/userSchema';
import { TUser } from '../types';

const create = async (reqBodyUser: TUser) => {
  const { displayName, email, password, image } = reqBodyUser;

  const { error } = Schemas.userSchema.validate({ displayName, email, password, image });
  if (error) throw error;

  const emailUser = await User.findOne({ where: { email, password } });
  if (emailUser) throw new Error('User already registered/409');

  const response = await User.create({ displayName, email, password, image });
  return response;
};

const getAll = async () => User.findAll({ 
  attributes: { 
    exclude: ['password'],
  },
});

const getUserId = async (id: number) => {
  // const user = await User.findByPk(id);
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) throw new Error('User does not exist/404');
  return user;
};

const apagarUsuario = async (id: number) => {
  await User.destroy({ where: { id } });
  return id;
};

export default {
  create,
  getAll,
  getUserId,
  apagarUsuario,
};
