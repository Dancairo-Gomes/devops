const sequelize = require("sequelize");
const connection = require("../database/connection");

const User = connection.define("User", {
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
});
User.sync({ force: false });

module.exports = User;
