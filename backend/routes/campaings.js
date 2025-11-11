import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

// Obtener todas las campañas
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM campaigns ORDER BY id DESC');
  res.json(rows);
});

// Crear nueva campaña
router.post('/', async (req, res) => {
  const { name, date_start, date_end } = req.body;
  const [result] = await pool.query(
    'INSERT INTO campaigns (name, date_start, date_end) VALUES (?, ?, ?)',
    [name, date_start, date_end]
  );
  res.json({ id: result.insertId, name, date_start, date_end });
});

// Eliminar campaña
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM campaigns WHERE id = ?', [id]);
  res.json({ success: true });
});

export default router;
