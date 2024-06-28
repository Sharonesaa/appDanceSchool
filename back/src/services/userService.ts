// services/userService.ts
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { UserDTO, CredentialDTO } from '../dto/UserDto';
import { AppDataSource } from '../config/data-source';
import UserRepository from '../repositories/UserRepository';
import CredentialRepository from '../repositories/CredentialRepository';


export const createUserService = async (userData: UserDTO) => {
  const { username, password, ...rest } = userData;

  if (!password) {
    throw new Error('Password cannot be null or undefined');
  }

  return await AppDataSource.manager.transaction(async transactionalEntityManager => {
    const lastUser = await UserRepository.findLastUser();
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
      username: username,
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
  const credential = await CredentialRepository.findOne({ where: { username, password }, relations: ['user'] });
  if (credential && credential.password === password) {
    return credential.user;
  }
  return null;
};

export const getUsersService = async () => {
  const users = await UserRepository.find();
  return users;
};

export const getUserByIdService = async (id: number) => {
  const user = await UserRepository.findById(id);
  return user;
};

export const deactivateUserService = async (id: number) => {
  const updatedUser = await UserRepository.deactivateUser(id);
  return updatedUser;
};
