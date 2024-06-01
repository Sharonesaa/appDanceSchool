// controllers/userController.ts
import { Request, Response } from 'express';
import { createUserService, getUsersService, getUserByIdService, deleteUserService, loginUserService } from '../services/userService';
import { UserDto, CredentialDTO } from '../dto/UserDto';

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: UserDto = req.body;
    
    if (!userData.credentials || !userData.credentials.username || !userData.credentials.password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const newUser = await createUserService(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    await deleteUserService(Number(id));
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const loginData: CredentialDTO = req.body;
  console.log(loginData)
  try {
    const user = await loginUserService(loginData);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid ' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
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