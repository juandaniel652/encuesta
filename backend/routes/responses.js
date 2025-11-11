import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

// Obtener todas las respuestas
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM responses ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener respuestas:', err);
    res.status(500).json({ error: 'Error al obtener respuestas' });
  }
});

// Crear nueva respuesta
router.post('/', async (req, res) => {
  try {
    const { campaign_id, client_number, client_name, answers } = req.body;
    const [result] = await pool.query(
      'INSERT INTO responses (campaign_id, client_number, client_name, answers) VALUES (?, ?, ?, ?)',
      [campaign_id, client_number, client_name, JSON.stringify(answers)]
    );
    res.json({ id: result.insertId, campaign_id, client_number, client_name, answers });
  } catch (err) {
    console.error('Error al guardar respuesta:', err);
    res.status(500).json({ error: 'Error al guardar respuesta' });
  }
});

export default router;
