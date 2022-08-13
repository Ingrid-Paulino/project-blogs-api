// require('dotenv').config();

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

require('dotenv').config();

const environment = process.env.NODE_ENV || 'test';

const suffix = {
  dev: '-dev',
  development: '-dev',
  test: '-test',
};

const options = {
  host: process.env.HOSTNAME || process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: 
    `${process.env.MYSQL_DB_NAME || 'blogs-api'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};
