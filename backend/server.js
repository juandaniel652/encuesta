import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import campaignRoutes from './routes/campaigns.js';
import responseRoutes from './routes/responses.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/campaigns', campaignRoutes);
app.use('/api/responses', responseRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor API en http://localhost:${PORT}`));
