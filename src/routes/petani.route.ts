import { Router } from 'express';
import {
  getAllPetaniController,
  insertPetaniController,
} from '../controllers/petani.controller';

export const PetaniRouter: Router = Router();
PetaniRouter.get('/', getAllPetaniController);
PetaniRouter.post('/post-petani', insertPetaniController);
