const { Categorie } = require('../models');
const { validateError } = require('../utils');

const create = async (name) => {
    if (!name) throw validateError(400, '"name" is required');

    const category = await Categorie.create({ name });

    // console.log('category', category);
    return category;
};

module.exports = {
    create,
};
