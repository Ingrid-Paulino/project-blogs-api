module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Users' }); 

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignkey: 'userId', as: 'blogPosts' });
  };

  return User;
};