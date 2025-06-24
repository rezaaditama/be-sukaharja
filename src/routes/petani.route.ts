import { Router } from 'express';
import {
  getAllPetaniController,
  insertPetaniController,
  updatePetaniController,
} from '../controllers/petani.controller';

export const PetaniRouter: Router = Router();
PetaniRouter.get('/', getAllPetaniController);
PetaniRouter.post('/post-petani', insertPetaniController);
PetaniRouter.put('/update-petani/:id', updatePetaniController);
