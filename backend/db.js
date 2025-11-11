// backend/db.js
import mysql from 'mysql2/promise';

// Configura tus credenciales:
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario_mysql',
  password: 'tu_password_mysql',
  database: 'androsnet_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
