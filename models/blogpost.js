module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER },
  }, { tableName: 'BlogPosts', createdAt: 'published', updatedAt: 'updated' }); 

  // hasOne -> possui um
  // belongsTo -> pertence a um
  // hasMany -> possui vários
  // belongsToMany -> pertence a vários

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignkey: 'userId', as: 'user' });
  };

  return BlogPost;
};