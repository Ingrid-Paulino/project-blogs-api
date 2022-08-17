module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("BlogPosts", [
      {
        id: 1,
        title: "Post do Ano",
        content: "Melhor post do ano",
        userId: 1,
        created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        deleted_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        id: 2,
        title: "Vamos que vamos",
        content: "Foguete não tem ré",
        userId: 1,
        // created_at: new Date("2011-08-01T19:58:00.000Z"),
        // updated_at: new Date("2011-08-01T19:58:51.000Z"),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        deleted_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]), { timestamps: true };
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("BlogPosts", null, {});
  },
};
