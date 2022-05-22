const Pool = require("pg").Pool;

require("dotenv").config();
const { PG_PASSWORD, PG_USER, PG_HOST, PG_DATABASE } = process.env;

const pool = new Pool({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST,
  database: PG_DATABASE,
  port: 5432,
  dialect: "postgres",
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
