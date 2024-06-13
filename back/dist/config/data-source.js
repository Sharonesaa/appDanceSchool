"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = exports.StyleModel = exports.ClassModel = exports.RoleModel = exports.CredentialModel = exports.UserModel = exports.AppDataSource = void 0;
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
const User_1 = require("../entities/User");
const typeorm_1 = require("typeorm");
const Role_1 = require("../entities/Role");
const Class_1 = require("../entities/Class");
const Style_1 = require("../entities/Style");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lsharon1778",
    database: "kadenzaescueladebaile",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Appointment_1.Appointment, Credential_1.Credential, Role_1.Role, Class_1.Class, Style_1.Style],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_1.Credential);
exports.RoleModel = exports.AppDataSource.getRepository(Role_1.Role);
exports.ClassModel = exports.AppDataSource.getRepository(Class_1.Class);
exports.StyleModel = exports.AppDataSource.getRepository(Style_1.Style);
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
