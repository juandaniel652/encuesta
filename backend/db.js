import mysql from 'mysql2/promise';

export const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',     // cambia según tu config
  password: '',     // idem
  database: 'androsnet'
});
