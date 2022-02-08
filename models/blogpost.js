module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    updated: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, { tableName: 'BlogPosts', timestamps: true, createdAt: 'published', updatedAt: 'updated' });

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { // models.User faz referencia a minha model User
      foreignkey: 'id',
      as: 'users',
    });

    BlogPost.belongsMany(models.PostsCategorie, {
      foreignkey: 'post_id',
      as: 'postsCategories',
    });
  };

  return BlogPost;
};
