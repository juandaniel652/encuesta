import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

// Obtener todas las campañas
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM campaigns ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener campañas:', err);
    res.status(500).json({ error: 'Error al obtener campañas' });
  }
});

// Crear nueva campaña
router.post('/', async (req, res) => {
  try {
    const { name, date_start, date_end } = req.body;
    const [result] = await pool.query(
      'INSERT INTO campaigns (name, date_start, date_end) VALUES (?, ?, ?)',
      [name, date_start, date_end]
    );
    res.json({ id: result.insertId, name, date_start, date_end });
  } catch (err) {
    console.error('Error al crear campaña:', err);
    res.status(500).json({ error: 'Error al crear campaña' });
  }
});

export default router;
