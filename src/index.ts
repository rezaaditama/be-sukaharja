import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port: Number = Number(process.env.PORT) || 3000;

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: '200' });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
