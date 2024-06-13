import { Router } from 'express';
import { createStyle, getStyles, updateStyle, deactivateStyle } from '../controllers/styleController';

const styleRouter : Router = Router();

styleRouter.post('/', createStyle);
styleRouter.get('/', getStyles);
styleRouter.put('/:id', updateStyle);
styleRouter.patch('/deactivate/:id', deactivateStyle);

export default styleRouter;