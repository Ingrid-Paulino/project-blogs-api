const { Categorie } = require('../models');
const { validateError } = require('../utils');

const create = async (name) => {
    if (!name) throw validateError(400, '"name" is required');

    const category = await Categorie.create({ name });

    // console.log('category', category);
    return category;
};

const getAll = async () => Categorie.findAll({ attributes: { exclude: 'password' } });

module.exports = {
    create,
    getAll,
};
