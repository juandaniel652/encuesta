import express from 'express';
import { db } from '../db.js';
import { randomUUID } from 'crypto';
const router = express.Router();

// Obtener todas las campañas
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM campaigns ORDER BY created_at DESC');
  res.json(rows);
});

// Crear nueva campaña
router.post('/', async (req, res) => {
  const id = randomUUID();
  const { name, date_start, date_end } = req.body;
  const now = new Date();
  await db.query(
    'INSERT INTO campaigns (id, name, date_start, date_end, created_at, updated_at) VALUES (?,?,?,?,?,?)',
    [id, name, date_start, date_end, now, now]
  );
  res.json({ id, name });
});

// Eliminar campaña
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM campaigns WHERE id=?', [id]);
  res.json({ success: true });
});

export default router;
