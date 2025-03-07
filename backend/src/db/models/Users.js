const { development: NODE_ENV } = require("../config/config");

const { model } = require("../schema");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(NODE_ENV.connection_uri, {
  dialect: "postgres",
});

const Users = sequelize.define(
  "Users",
  model({
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hash_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM("admin", "user"),
      defaultValue: "user",
    },
  })
);

module.exports = Users;
