module.exports = (sequelize, _DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie',
   {}, {
      timestamps: false,
      tableName: 'PostsCategories',
    }); 
    
  // belongsToMany -> pertence a vários

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories', through: PostsCategorie, foreignKey: 'postId', otherKey: 'categoryId',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategorie;
};