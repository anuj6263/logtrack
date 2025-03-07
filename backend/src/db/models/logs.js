const { development: NODE_ENV } = require("../config/config");

const { model } = require("../schema");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(NODE_ENV.connection_uri, {
  dialect: "postgres",
});

const logs = sequelize.define(
  "logs",
  model({
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    log_type: {
      type: Sequelize.ENUM("info", "error", "debug"),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: TABLES.USERS,
        key: "id",
      },
    },
  })
);

module.exports = logs;
