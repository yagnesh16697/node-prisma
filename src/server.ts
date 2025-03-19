import express from 'express';
import { PrismaClient } from '@prisma/client';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Write API
app.post('/data', async (req, res) => {
    const { name } = req.body;
    const newData = await prisma.example.create({ data: { name } });
    res.json(newData);
});

// Read API
app.get('/data', async (_req, res) => {
    const allData = await prisma.example.findMany();
    res.json(allData);
});

app.listen(3000, () => console.log('Server running on port 3000'));
