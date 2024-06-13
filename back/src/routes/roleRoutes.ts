import { Router } from 'express';
import { getRoles } from '../controllers/roleController';

const roleRouter: Router = Router();

// Rutas para roles
roleRouter.get('/', getRoles);

export default roleRouter;