import { Router } from 'express';
import { getAllPetani } from '../controllers/petani.controller';

export const PetaniRouter: Router = Router();
PetaniRouter.get('/', getAllPetani);
