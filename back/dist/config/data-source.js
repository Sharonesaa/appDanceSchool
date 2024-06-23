"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Style_1 = require("../entities/Style");
const Class_1 = require("../entities/Class");
const Appointment_1 = require("../entities/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'database',
    entities: [User_1.User, Credential_1.Credential, Style_1.Style, Class_1.Class, Appointment_1.Appointment],
    synchronize: true,
    logging: false,
    subscribers: [],
    migrations: []
});
