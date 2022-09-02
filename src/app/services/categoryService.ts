import Categorie from '../../db/models/categorie';
import Schema from '../schemas/userSchema';
import { TCategory } from '../types';
// import { throwError } from '../helpers/thowError';

const create = async (name: string) => {
  const { error } = Schema.categorySchema.validate({ name });
  if (error) throw error;
  const categoryCreate: TCategory = await Categorie.create({ name });
  return categoryCreate;
};

const getAll = async () => Categorie.findAll({ attributes: { exclude: ['password'] } });

export default {
  create,
  getAll,
};
