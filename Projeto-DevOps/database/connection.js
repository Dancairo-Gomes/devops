const Sequelize = require("sequelize");
require("dotenv/config");

const connection = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "-03:00",
  }
);

module.exports = connection;
