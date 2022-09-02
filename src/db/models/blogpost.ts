import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class BlogPost extends Model {
  public id: number;
  public displayName: string;
  public email: string;
  public password: string;
  public image: string;
}

BlogPost.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: STRING,
  content: STRING,
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
  createdAt: 'published',
  updatedAt: 'updated',
  modelName: 'BlogPost',
  tableName: 'BlogPosts',
  underscored: true,
  sequelize: db,
});

// hasOne -> possui um
// belongsTo -> pertence a um
// hasMany -> possui vários
// belongsToMany -> pertence a vários

// BlogPost.associate = (models) => {
//   BlogPost.belongsTo(models.User, {
//     foreignkey: 'userId', as: 'user' });
// };

export default BlogPost;