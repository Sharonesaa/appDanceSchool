import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Style } from '../entities/Style';
import { Class } from '../entities/Class';
import { Appointment } from '../entities/Appointment';
import { Role } from '../entities/Role';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Lsharon1778",
  entities: [User, Credential, Style, Class, Role, Appointment],
  database: "kadenzaescueladebaile",
  synchronize: true,
  logging: false,
  subscribers: [],
  migrations: [],
})