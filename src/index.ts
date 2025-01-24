import express, {Express} from 'express'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app:Express = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js & Prisma API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));