"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class PostsCategorie extends sequelize_1.Model {
}
PostsCategorie.init({}, {
    timestamps: false,
    modelName: 'PostsCategorie',
    tableName: 'PostsCategories',
    underscored: true,
    sequelize: _1.default,
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
exports.default = PostsCategorie;
