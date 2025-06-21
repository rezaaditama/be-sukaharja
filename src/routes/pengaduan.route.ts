import { Router } from 'express';
import {
  createPengaduanController,
  getAllPengaduanController,
} from '../controllers/pengaduan.controller';

export const PengaduanRouter: Router = Router();
PengaduanRouter.get('/', getAllPengaduanController);
PengaduanRouter.post('/post-pengaduan', createPengaduanController);
