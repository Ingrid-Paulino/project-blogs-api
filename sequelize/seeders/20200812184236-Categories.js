module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          name: "Inovação",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          deleted_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 2,
          name: "Escola",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          deleted_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      { timestamps: true }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
