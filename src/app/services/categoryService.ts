// import Categorie from '../../db/models/categorie';
// import { throwError } from '../helpers/thowError';

// const create = async (name: any) => {
//   if (!name) throwError('"name" is required/400');

//   const category = await Categorie.create({ name });

//   console.log('category', category);
//   return category;
// };

// const getAll = async () => Categorie.findAll({ attributes: { exclude: ['password'] } });

// export default {
//   create,
//   getAll,
// };
