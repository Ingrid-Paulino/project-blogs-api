import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class User extends Model {
  public id: number;
  public displayName: string;
  public email: string;
  public password: string;
  public image: string;
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  displayName: STRING,
  email: STRING,
  password: STRING,
  image: STRING,
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
  modelName: 'User',
  tableName: 'Users',
  underscored: true,
  sequelize: db,
});

// hasOne -> possui um
// hasMany -> possui vários
// belongsTo -> pertence a um
// belongsMany -> pertence a vários

// User.associate = (models) => {
//   User.hasMany(models.BlogPost, {
//     foreignkey: 'userId', as: 'blogPosts' });
// };

export default User;