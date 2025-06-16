import express, { Application } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

const app: Application = express();
const port: Number = Number(process.env.PORT) || 3000;

routes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));
