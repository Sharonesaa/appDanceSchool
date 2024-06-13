// controllers/userController.ts
import { Request, Response } from 'express';
import { createUserService, getUsersService, getUserByIdService, deactivateUserService, loginUserService } from '../services/userService';
import { UserDTO, CredentialDTO } from '../dto/UserDto';
import { Console } from 'console';

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: UserDTO = req.body;
    const newUser = await createUserService(userData);
    res.status(201).json({
      message: 'User created successfully',
      user: newUser
    });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user',error });
    console.error('Error during transaction:', error);
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
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    const user = await getUserByIdService(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
    
  }
};


export const deactivateUserController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);

  if (isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const updatedUser = await deactivateUserService(userId);
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await loginUserService(username, password);
    if (user) {
      res.status(200).json({
        login: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          birthdate: user.birthdate,
          nDni: user.nDni,
        },
      });
    } else {
      res.status(400).json({ login: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
};