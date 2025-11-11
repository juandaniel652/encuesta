import express from 'express';
import { db } from '../db.js';
import { randomUUID } from 'crypto';
const router = express.Router();

// Registrar una respuesta
router.post('/', async (req, res) => {
  const { campaign_id, client_number, client_name, answers } = req.body;
  const respId = randomUUID();
  const now = new Date();

  await db.query(
    'INSERT INTO responses (id, campaign_id, client_number, client_name, created_at) VALUES (?,?,?,?,?)',
    [respId, campaign_id, client_number, client_name, now]
  );

  for (const a of answers) {
    const ansId = randomUUID();
    await db.query(
      'INSERT INTO answers (id, response_id, question_id, response_text) VALUES (?,?,?,?)',
      [ansId, respId, a.questionId, JSON.stringify(a.response)]
    );
  }

  res.json({ success: true });
});

export default router;
