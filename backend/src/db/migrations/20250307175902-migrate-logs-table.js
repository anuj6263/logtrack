const { model } = require("../schema");

const TABLES = {
  USERS: "Users",
  LOGS: "logs",
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        TABLES.USERS,
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
        }),
        {
          transaction,
        }
      );

      await queryInterface.createTable(
        TABLES.LOGS,
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
        }),
        {
          transaction,
        }
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable(TABLES.LOGS, { transaction });
      await queryInterface.dropTable(TABLES.USERS, { transaction });
    });
  },
};
