import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_password',
  database: 'androsnet_db'
});

// Test conexión
(async () => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS test');
    console.log('✅ Conexión a MySQL OK:', rows[0].test);
  } catch (err) {
    console.error('❌ Error conectando a MySQL:', err.message);
  }
})();
