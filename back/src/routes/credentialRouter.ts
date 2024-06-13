import { Router } from 'express';
import { loginUser } from '../controllers/userController';

const credentialRouter: Router = Router();


credentialRouter.post('/login', loginUser);


export default credentialRouter;
