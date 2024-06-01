"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        if (!userData.credentials || !userData.credentials.username || !userData.credentials.password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }
        const newUser = yield (0, userService_1.createUserService)(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hola");
    try {
        const users = yield (0, userService_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield (0, userService_1.getUserByIdService)(Number(id));
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
});
exports.getUserById = getUserById;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield (0, userService_1.deleteUserService)(Number(id));
        res.status(200).json({ message: 'User deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});
exports.deleteUser = deleteUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = req.body;
    try {
        const user = yield (0, userService_1.loginUserService)(loginData);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});
exports.loginUser = loginUser;
// LOGICA ANTES DE CLASE
// const createUser = async (req: Request, res: Response) => {
//   upload(req, res, async function (err) {
//     if (err) {
//       return res.status(500).send({ message: 'Error uploading file.' });
//     }
//     const { name, email, phone, password, username } = req.body;
//     const profilePicture = req.file?.path;
//     const user: IUser = {
//       name,
//       email,
//       phone,
//       password,
//       profilePicture,
//       username
//     };
//     try {
//       await userService.createUser(user);
//       res.status(200).send({ message: 'Usuario registrado y correo enviado.', profilePicture });
//     } catch (error) {
//       res.status(500).send({ message: 'Error al registrar el usuario.', error });
//     }
//   });
// };
// const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await userService.getUsers();
//     res.status(200).send(users);
//   } catch (error) {
//     res.status(500).send({ message: 'Error al obtener los usuarios.', error });
//   }
// };
// const deleteUser = async (req: Request, res: Response) => {
//   const userId = req.params.id;
//   try {
//     await userService.deleteUser(userId);
//     res.status(200).send({ message: 'Usuario eliminado correctamente.' });
//   } catch (error) {
//     res.status(500).send({ message: 'Error al eliminar el usuario.', error });
//   }
// };
// const updateUser = async (req: Request, res: Response) => {
//   const userId = req.params.id;
//   const { name, email, phone, password, username } = req.body;
//   const updatedUser: IUser = {
//     name,
//     email,
//     phone,
//     password,
//     username,
//     profilePicture: req.file?.path // Assumes profile picture is being updated via multer
//   };
//   try {
//     await userService.updateUser(userId, updatedUser);
//     res.status(200).send({ message: 'Usuario actualizado correctamente.' });
//   } catch (error) {
//     res.status(500).send({ message: 'Error al actualizar el usuario.', error });
//   }
// };
// export default { createUser, getUsers, deleteUser, updateUser };
