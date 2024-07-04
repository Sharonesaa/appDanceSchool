import { DataSource } from 'typeorm';
import { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from './envs';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Style } from '../entities/Style';
import { Class } from '../entities/Class';
import { Appointment } from '../entities/Appointment';
import { Role } from '../entities/Role';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  entities: [User, Credential, Style, Class, Role, Appointment],
  database:DB_NAME,
  synchronize: true,
  logging: false,
  subscribers: [],
  migrations: [],
})