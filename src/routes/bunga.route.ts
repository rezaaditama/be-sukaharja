import { Router } from 'express';
import {
  createProduct,
  getAllBunga,
  getBungaById,
} from '../controllers/bunga.controller';

export const BungaRouter: Router = Router();
BungaRouter.get('/', getAllBunga);
BungaRouter.get('/:id', getBungaById);

BungaRouter.post('/', createProduct);
