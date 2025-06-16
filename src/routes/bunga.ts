import { Router, Request, Response, NextFunction } from 'express';

export const BungaRouter: Router = Router();

BungaRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res
    .status(200)
    .send({ status: true, statusCode: 200, data: [{ name: 'sepatu' }] });
});
