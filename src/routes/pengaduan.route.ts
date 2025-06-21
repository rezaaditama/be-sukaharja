import { Router } from 'express';
import { getAllPengaduan } from '../controllers/pengaduan.controller';

export const PengaduanRouter: Router = Router();
PengaduanRouter.get('/', getAllPengaduan);
