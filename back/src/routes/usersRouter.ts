import { Router } from 'express';
import { createUser, getUsers, deleteUser,getUserById,loginUser } from '../controllers/userController';
import auth from '../middleware/auth';

const usersRouter: Router = Router();

usersRouter.post('/', createUser);
usersRouter.post('/', auth, getUsers);
usersRouter.delete('/:id', deleteUser);
usersRouter.get('/:id', auth, getUserById); // Nueva ruta para obtener el detalle de un usuario específico
usersRouter.delete('/:id', deleteUser);
usersRouter.post('/login', loginUser);
// GET /users/:id => Obtener el detalle de un usuario específico.
// POST /users/login => Login del usuario a la aplicación.


export default usersRouter;
