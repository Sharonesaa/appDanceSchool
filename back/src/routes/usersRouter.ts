import { Router } from 'express';
import { createUser, getUsers, getUserById, deleteUser, loginUser } from '../controllers/userController';

const usersRouter: Router = Router();

usersRouter.post('/', createUser);
usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/:id', deleteUser);
usersRouter.post('/login', loginUser);

export default usersRouter;
