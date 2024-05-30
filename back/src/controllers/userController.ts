
import { Request, Response } from 'express';
import { createUserServices, getUsersService, deleteUserService, getUserByIdService, loginUserService } from '../services/userService';
import upload from '../middleware/multerConfig';
import {IUser, UserLoginDTO} from '../Interfaces/IUser';


export const createUser = async (req: Request, res: Response) => {
  const { name, email, phone, password, profilePicture, username, active} = req.body;
  const newUser: IUser = await createUserServices({name, email, phone, password, profilePicture, active})
  res.status(201).json(newUser)
}

export const getUsers = async (req: Request, res: Response) => {
  const users : IUser[] = await getUsersService();
  res.status(201).json(users)
}

export const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.body 
  await deleteUserService(id)
  res.status(201).json({message:"eliminado"})
}

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  const user = getUserByIdService(numericId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const loginUser = (req: Request, res: Response) => {
  const loginData: UserLoginDTO = req.body;
  const user = loginUserService(loginData);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

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