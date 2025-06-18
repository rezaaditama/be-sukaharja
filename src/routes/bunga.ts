import { Router, Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const BungaRouter: Router = Router();

BungaRouter.get('/', (req: Request, res: Response, _next: NextFunction) => {
  logger.info('data bunga dikirim');
  res
    .status(200)
    .send({ status: true, statusCode: 200, data: [{ name: 'sepatu' }] });
});

BungaRouter.post('/', (req, res, _next) => {
  logger.info('Success add new bunga');
  res.status(200).send({ status: true, statusCode: 200, data: req.body });
});
