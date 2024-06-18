import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Style } from '../entities/Style';
import { Class } from '../entities/Class';
import { Appointment } from '../entities/Appointment';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'database',
  entities: [User, Credential, Style, Class, Appointment],
  synchronize: true,
  logging: false,
  subscribers: [],
  migrations: []
});
