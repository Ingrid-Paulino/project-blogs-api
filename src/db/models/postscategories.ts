import { Model } from 'sequelize';
import db from '.';

class PostsCategorie extends Model {

}

PostsCategorie.init({}, {
  timestamps: false,
  modelName: 'PostsCategorie',
  tableName: 'PostsCategories',
  underscored: true,
  sequelize: db,
});

// belongsToMany -> pertence a vários

// PostsCategorie.associate = (models) => {
//   models.BlogPost.belongsToMany(models.Categorie, {
//     as: 'categories', through: PostsCategorie, foreignKey: 'postId', otherKey: 'categoryId',
//   });

//   models.Categorie.belongsToMany(models.BlogPost, {
//     as: 'blogPosts',
//     through: PostsCategorie,
//     foreignKey: 'categoryId',
//     otherKey: 'postId',
//   });
// };

export default PostsCategorie;