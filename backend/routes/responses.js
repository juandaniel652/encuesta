import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

// Obtener todas las respuestas
router.get('/', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM responses ORDER BY id DESC');
  res.json(rows);
});

// Crear respuesta
router.post('/', async (req, res) => {
  const { campaign_id, client_number, client_name, answers } = req.body;
  const [result] = await pool.query(
    'INSERT INTO responses (campaign_id, client_number, client_name, answers) VALUES (?, ?, ?, ?)',
    [campaign_id, client_number, client_name, JSON.stringify(answers)]
  );
  res.json({ id: result.insertId, success: true });
});

// Eliminar respuesta
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM responses WHERE id = ?', [id]);
  res.json({ success: true });
});

export default router;
