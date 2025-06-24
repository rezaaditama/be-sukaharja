import { Router } from 'express';
import {
  createPengaduanController,
  getAllPengaduanController,
  updatePengaduanController,
} from '../controllers/pengaduan.controller';

export const PengaduanRouter: Router = Router();
PengaduanRouter.get('/', getAllPengaduanController);
PengaduanRouter.post('/post-pengaduan', createPengaduanController);
PengaduanRouter.put('/update-pengaduan/:id', updatePengaduanController);
