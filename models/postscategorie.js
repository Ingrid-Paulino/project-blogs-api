module.exports = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  }, { timestamps: false, tableName: 'PostsCategories' });

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  PostsCategorie.associate = (models) => {
    PostsCategorie.belongsTo(models.BlogPost, {
      foreignkey: 'post_id',
      as: 'blogPosts',
    });

    PostsCategorie.belongsMany(models.Categories, {
      foreignkey: 'category_id',
      as: 'categories',
    });
  };

  return PostsCategorie;
};
