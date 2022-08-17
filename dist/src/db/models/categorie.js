"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Categorie extends sequelize_1.Model {
}
Categorie.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: sequelize_1.STRING,
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
    modelName: 'Categorie',
    tableName: 'Categories',
    underscored: true,
    sequelize: _1.default,
});
exports.default = Categorie;
