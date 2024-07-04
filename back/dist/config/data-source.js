"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Style_1 = require("../entities/Style");
const Class_1 = require("../entities/Class");
const Appointment_1 = require("../entities/Appointment");
const Role_1 = require("../entities/Role");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    entities: [User_1.User, Credential_1.Credential, Style_1.Style, Class_1.Class, Role_1.Role, Appointment_1.Appointment],
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: false,
    subscribers: [],
    migrations: [],
});
