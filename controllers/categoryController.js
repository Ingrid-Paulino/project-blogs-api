const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
    try {
        const { name } = req.body;

        const response = await categoryService.create(name);
        console.log({ response });
        return res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports = { create };