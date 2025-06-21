import { Router } from 'express';
import { getAllUser } from '../controllers/user.controller';

export const UserRouter: Router = Router();
UserRouter.get('/', getAllUser);
