import express from 'express';
import cors from 'cors';
import campaignsRoutes from './routes/campaigns.js';
import responsesRoutes from './routes/responses.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas base
app.use('/api/campaigns', campaignsRoutes);
app.use('/api/responses', responsesRoutes);

app.listen(PORT, () => console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`));
