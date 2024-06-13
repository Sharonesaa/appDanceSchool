// services/userService.ts
import { UserDTO, CredentialDTO } from "../dto/UserDto";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { IUser, ICredential } from '../Interfaces/IUser';
import nodemailer from 'nodemailer';
import nodemailerConfig from '../config/nodemailerConfig';
import { UserModel, CredentialModel,RoleModel } from "../config/data-source";
import { AppDataSource } from '../config/data-source';

export const createUserService = async (userData: UserDTO) => {
  const { username, password, ...rest } = userData;

  if (!password) {
    throw new Error('Password cannot be null or undefined');
  }

  return await AppDataSource.manager.transaction(async transactionalEntityManager => {
    // Obtener el último valor de inventario
    const lastUser = await transactionalEntityManager.createQueryBuilder(User, 'user')
      .orderBy('user.inventory', 'DESC')
      .getOne();

    const lastInventory = lastUser ? lastUser.inventory : 0;
    const newInventory = lastInventory + 2;

    const credentialData: CredentialDTO = {
      username: username,
      password: password
    };

    const credential = transactionalEntityManager.create(Credential, credentialData);
    await transactionalEntityManager.save(Credential, credential);

    const newUser = transactionalEntityManager.create(User, {
      ...rest,
      username: username, // Asegúrate de asignar el nombre de usuario
      credential: credential,
      role: { id: 1 }, // Asignar automáticamente el rol de estudiante con ID 1
      active: true,
      inventory: newInventory
    });

    const createdUser = await transactionalEntityManager.save(User, newUser);
    return createdUser;
  });
};

export const loginUserService = async (username: string, password: string) => {
  const credential = await CredentialModel.findOne({ where: { username, password }, relations: ['user'] });
  if (credential && credential.password === password) {
    return credential.user;
  }
  return null;
};

export const getUsersService = async () =>{
  const users = await UserModel.find();
  return users;
};


export const getUserByIdService = async (id: number) => {
  const user = await UserModel.findOneBy({ id });
  return user;
};

export const deactivateUserService = async (id: number) => {
  const user = await UserModel.findOneBy({ id });

  if (!user) {
    throw new Error('User not found');
  }

  user.active = false;
  const updatedUser = await UserModel.save(user);
  return updatedUser;
};



