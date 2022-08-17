import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class Categorie extends Model {
  public id: number;
  public name: string;
}

Categorie.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: STRING,
  createdAt: {
    allowNull: false,
    type: DATE(3),
    field: 'created_at',
    defaultValue: new Date(),
  },
  updatedAt: {
    allowNull: false,
    type: DATE(3),
    field: 'updated_at',
    defaultValue: new Date(),
  },
  deletedAt: {
    allowNull: false,
    type: DATE(3),
    field: 'deleted_at',
    defaultValue: new Date(),
  },
}, {
  timestamps: true,
  modelName: 'Categorie',
  tableName: 'Categories',
  underscored: true,
  sequelize: db,
});

export default Categorie;