import { Router } from 'express';
import { createUser, getUsers, getUserById, deactivateUserController, loginUser } from '../controllers/userController';

const usersRouter: Router = Router();

usersRouter.post('/register', createUser);
usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.patch('/:id/deactivate', deactivateUserController);
usersRouter.post('/login', loginUser);


export default usersRouter;
