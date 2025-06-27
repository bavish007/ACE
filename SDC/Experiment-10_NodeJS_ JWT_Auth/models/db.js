const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

let pool;

function initDb(callback) {
  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD) {
    return callback(new Error('.env missing or incomplete. Please check your environment variables.'));
  }
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
  connection.query('CREATE DATABASE IF NOT EXISTS ' + process.env.DB_NAME, (err) => {
    if (err) {
      connection.end();
      return callback(err);
    }
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    const sqlPath = path.join(__dirname, '../sql/init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    const statements = sql.split(';').map(s => s.trim()).filter(Boolean);
    (function runStatements(i) {
      if (i >= statements.length) return callback(null);
      pool.query(statements[i], (err) => {
        if (err) return callback(err);
        runStatements(i + 1);
      });
    })(0);
  });
}

function getPool() {
  if (!pool) throw new Error('Database not initialized');
  return pool;
}

module.exports = { initDb, getPool }; 