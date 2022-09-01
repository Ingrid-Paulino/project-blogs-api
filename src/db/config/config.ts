import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'password',
  database: 'blogs_api',
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

// const config: Options = {
//   username: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || '123456',
//   database: 'TRYBE_FUTEBOL_CLUBE',
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 3002,
//   dialect: 'mysql',
//   dialectOptions: {
//     timezone: 'Z',
//   },
//   logging: false,
// }

// module.exports = config;

export default config;
// module.exports = {
//   development: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: 'blogs_api',
//     host: process.env.HOSTNAME,
//     dialect: 'mysql',
//   },
//   test: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: 'blogs_api',
//     host: process.env.HOSTNAME,
//     dialect: 'mysql',
//   },
//   production: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: 'blogs_api',
//     host: process.env.HOSTNAME,
//     dialect: 'mysql',
//   },
// };

// require('dotenv').config();

// const environment = process.env.NODE_ENV || 'test';

// const suffix = {
//   dev: '-dev',
//   development: '-dev',
//   test: '-test',
// };

// const options = {
//   host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost',
//   port: process.env.MYSQL_PORT || '3306',
//   database: 
//     `${process.env.MYSQL_DB_NAME || 'blogs-api'}${suffix[environment] || suffix.test}`,
//   username: process.env.MYSQL_USER || 'root',
//   password: process.env.MYSQL_PASSWORD || '1234',
//   dialect: 'mysql',
//   dialectOptions: {
//     timezone: 'Z',
//   },
//   logging: process.env.DEBUG !== 'false',
// };

// module.exports = {
//   development: {
//     ...options,
//   },
//   test: {
//     ...options,
//   },
// };
