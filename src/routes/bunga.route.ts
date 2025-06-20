import { Router, Request, Response, NextFunction } from 'express';
import { createBungaValidation } from '../validations/bunga.validation';
import { logger } from '../utils/logger';

export const BungaRouter: Router = Router();

BungaRouter.get('/', (req: Request, res: Response, _next: NextFunction) => {
  logger.info('data bunga dikirim');
  res
    .status(200)
    .send({ status: true, statusCode: 200, data: [{ name: 'sepatu' }] });
});

BungaRouter.post('/', (req: Request, res: Response, _next: NextFunction) => {
  const result = createBungaValidation.safeParse(req.body);

  if (!result.success) {
    logger.error({ errors: result.error.errors }, 'validation error');
    res.status(400).json({
      status: false,
      statusCode: 400,
      errors: result.error.errors,
    });
    return;
  }
  logger.info('Success add new bunga');
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: 'Add Data Bunga Success',
    data: result.data,
  });
});
