const { Sequelize } = require("sequelize");

/**
 * Adds timestamp fields (created_at, updated_at, deleted_at) to a Sequelize model definition.
 * @param {object} schema - The schema definition for a Sequelize model.
 * @returns {object} - Updated schema with timestamps.
 */

const model = (schema) => ({
  ...schema,
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = { model };
