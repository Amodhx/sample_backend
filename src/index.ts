import express, {Express} from 'express'
import { PrismaClient } from '@prisma/client';
import MainRouter from "./routes/main.route";
const prisma = new PrismaClient();

const app:Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',MainRouter.router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));