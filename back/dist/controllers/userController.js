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
exports.deleteUser = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, password, profilePicture, username, active } = req.body;
    const newUser = yield (0, userService_1.createUserServices)({ name, email, phone, password, profilePicture, username, active });
    res.status(201).json(newUser);
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userService_1.getUsersService)();
    res.status(201).json(users);
});
exports.getUsers = getUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    yield (0, userService_1.deleteUserService)(id);
    res.status(201).json({ message: "eliminado" });
});
exports.deleteUser = deleteUser;
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
