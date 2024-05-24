import { Request, Response } from 'express';
import userService from '../services/userService';
import upload from '../middleware/multerConfig';
import { IUser } from '../Interfaces/IUser';

const register = async (req: Request, res: Response) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).send({ message: 'Error uploading file.' });
    }

    const { name, email, phone, password, username } = req.body;
    const profilePicture = req.file?.path;

    const user: IUser = {
      name,
      email,
      phone,
      password,
      profilePicture,
      username
    };

    try {
      await userService.registerUser(user);
      res.status(200).send({ message: 'Usuario registrado y correo enviado.', profilePicture });
    } catch (error) {
      res.status(500).send({ message: 'Error al registrar el usuario.', error });
    }
  });
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: 'Error al obtener los usuarios.', error });
  }
};

export default { register, getUsers };
