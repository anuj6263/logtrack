require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  }
);

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to the database!");
  } catch (errorDetails) {
    console.log(
      `Failed to connect to Database, errors : ${errorDetails.message}`
    );
  }
};

module.exports = { connectToDb };
