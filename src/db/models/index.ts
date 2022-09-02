import { Sequelize } from 'sequelize';

import databaseConfig from '../config/config';

export default new Sequelize('mysql://root:password@127.0.0.1:3306/blogs_api', databaseConfig);
