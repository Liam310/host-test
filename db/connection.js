const { Pool } = require("pg");

const ENV = process.env.NODE_ENV || "development";
const pathToEnvFile = `${__dirname}/../.env.${ENV}`;

require("dotenv").config({ path: pathToEnvFile });

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE HAS NOT BEEN SET!!!");
}

const pool = new Pool();

module.exports = pool;
