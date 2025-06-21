import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const dbPool = mysql.createPool({
  host: '103.127.98.252',
  user: 'root',
  password: 'Baru2023',
  database: 'db_sukaharja',
  waitForConnections: true,
  connectionLimit: 13,
  queueLimit: 1000,
});
