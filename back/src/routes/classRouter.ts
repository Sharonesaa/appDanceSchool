import { Router } from 'express';
import { getClassByIdController, getAllClassesController, createClassController, updateClassController, deactivateClassController } from '../controllers/classController';

const classRouter: Router = Router();

classRouter.get('/', getAllClassesController);
classRouter.get('/:id', getClassByIdController);
classRouter.post('/', createClassController);
classRouter.put('/:id', updateClassController);
classRouter.patch('/:id/deactivate', deactivateClassController);



export default classRouter;