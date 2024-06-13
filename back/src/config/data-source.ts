import { DataSource } from "typeorm"
import { User } from '../entities/User';
import { Role } from '../entities/Role';
import { Class } from '../entities/Class';
import { Style } from '../entities/Style';
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lsharon1778",
    database: "kadenzaescueladebaile",
    synchronize: true,
    logging: false,
    entities: [User, Appointment,Credential,Role,Class,Style],
    subscribers: [],
    migrations: [],
   
})






