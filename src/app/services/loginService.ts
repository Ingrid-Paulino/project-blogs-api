import User from '../../db/models/user';
import Schemas from '../schemas/userSchema';
import { TLogin } from '../types';

const createLogin = async (data: TLogin) => {
  const { email, password } = data;
  const { error } = Schemas.loginSchema.validate({ email, password });
  if (error) throw error;

  const existUser = await User.findOne({ where: { email, password } });

  if (!existUser) throw new Error('Invalid fields/400');
  return existUser;
};

export default { createLogin };