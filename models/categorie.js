module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  }, {
      timestamps: false,
      tableName: 'Categories',
    }); 

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  // Categorie.associate = (models) => {
  //   Categorie.hasMany(models.PostsCategorie, {
  //     foreignkey: 'category_id', as: 'postsCategorie' });
  // };

  return Categorie;
};