require("dotenv").config();

module.exports = {
  development: {
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    username: process.env.USER,
    connection_uri: process.env.CONNECTION_URL,
    host: "127.0.0.1",
    dialect: "postgresql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgresql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgresql",
  },
};
