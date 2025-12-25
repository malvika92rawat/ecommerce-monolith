const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "ecom_user",
  password: process.env.DB_PASSWORD || "ecom_pass",
  database: process.env.DB_NAME || "ecommerce"
});

module.exports = db;
