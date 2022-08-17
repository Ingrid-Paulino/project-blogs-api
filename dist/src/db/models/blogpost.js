"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class BlogPost extends sequelize_1.Model {
}
BlogPost.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: sequelize_1.STRING,
    content: sequelize_1.STRING,
    password: sequelize_1.STRING,
    image: sequelize_1.STRING,
    createdAt: {
        allowNull: false,
        type: (0, sequelize_1.DATE)(3),
        field: 'created_at',
        defaultValue: new Date(),
    },
    updatedAt: {
        allowNull: false,
        type: (0, sequelize_1.DATE)(3),
        field: 'updated_at',
        defaultValue: new Date(),
    },
    deletedAt: {
        allowNull: false,
        type: (0, sequelize_1.DATE)(3),
        field: 'deleted_at',
        defaultValue: new Date(),
    },
}, {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
    modelName: 'BlogPost',
    tableName: 'BlogPosts',
    underscored: true,
    sequelize: _1.default,
});
// hasOne -> possui um
// belongsTo -> pertence a um
// hasMany -> possui vários
// belongsToMany -> pertence a vários
// BlogPost.associate = (models) => {
//   BlogPost.belongsTo(models.User, {
//     foreignkey: 'userId', as: 'user' });
// };
exports.default = BlogPost;
