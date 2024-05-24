"use strict";
// src/services/userService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailerConfig_1 = __importDefault(require("../config/nodemailerConfig"));
// Aquí deberías importar tu cliente de base de datos, por ejemplo pg para PostgreSQL
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // Aquí deberías añadir la lógica para guardar el usuario y las credenciales en la base de datos.
    // Por ejemplo, usando pg (node-postgres):
    // const client = new Client();
    // await client.connect();
    // const queryText = 'INSERT INTO usuarios(name, email, phone, password, profilePicture, username) VALUES($1, $2, $3, $4, $5, $6) RETURNING id';
    // const res = await client.query(queryText, [user.name, user.email, user.phone, user.password, user.profilePicture, user.username]);
    // await client.end();
    const transporter = nodemailer_1.default.createTransport(nodemailerConfig_1.default);
    // const mailOptions = {
    //   from: process.env.EMAIL,
    //   to: user.email,
    //   subject: 'Registro Exitoso',
    //   text: `Hola ${user.name}, gracias por registrarte.`
    // };
    // await transporter.sendMail(mailOptions);
});
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    // Aquí deberías añadir la lógica para obtener los usuarios de la base de datos.
    // Por ejemplo, usando pg (node-postgres):
    // const client = new Client();
    // await client.connect();
    // const res = await client.query('SELECT * FROM usuarios');
    // await client.end();
    // return res.rows;
    return []; // Esto debe ser reemplazado por el resultado real de la base de datos
});
exports.default = { registerUser, getUsers };
