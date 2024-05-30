"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.getUsersService = exports.createUserServices = void 0;
// LOGICA DE CLASE
let users = [{
        id: 1,
        name: "Sharon",
        email: "orianna@gmail.com",
        phone: "1170545821",
        password: "sole",
        profilePicture: "img.jpg",
        username: "sharonesaa",
        active: true
    }];
let id = 2;
const createUserServices = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        profilePicture: userData.profilePicture,
        username: userData.username,
        active: userData.active,
    };
    users.push(newUser);
    id++;
    return newUser;
});
exports.createUserServices = createUserServices;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUsersService = getUsersService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => {
        return user.id !== id;
    });
});
exports.deleteUserService = deleteUserService;
// MI LOGICA NO LA EXPLICADA EN CLASE 
// Aquí deberías importar tu cliente de base de datos, por ejemplo pg para PostgreSQL
// const createUser = async (user: IUser): Promise<void> => {
// Aquí deberías añadir la lógica para guardar el usuario y las credenciales en la base de datos.
// Por ejemplo, usando pg (node-postgres):
// const client = new Client();
// await client.connect();
// const queryText = 'INSERT INTO usuarios(name, email, phone, password, profilePicture, username) VALUES($1, $2, $3, $4, $5, $6) RETURNING id';
// const res = await client.query(queryText, [user.name, user.email, user.phone, user.password, user.profilePicture, user.username]);
// await client.end();
// const transporter = nodemailer.createTransport(nodemailerConfig);
// const mailOptions = {
//   from: process.env.EMAIL,
//   to: user.email,
//   subject: 'Registro Exitoso',
//   text: `Hola ${user.name}, gracias por registrarte.`
// };
// await transporter.sendMail(mailOptions);
// };
// const getUsers = async (): Promise<IUser[]> => {
// Aquí deberías añadir la lógica para obtener los usuarios de la base de datos.
// Por ejemplo, usando pg (node-postgres):
// const client = new Client();
// await client.connect();
// const res = await client.query('SELECT * FROM usuarios');
// await client.end();
// return res.rows;
// return []; // Esto debe ser reemplazado por el resultado real de la base de datos
// };
// const deleteUser = async (userId: string): Promise<void> => {
//   const client = new Client();
//   await client.connect();
//   const queryText = 'DELETE FROM usuarios WHERE id = $1';
//   await client.query(queryText, [userId]);
//   await client.end();
// };
// const updateUser = async (userId: string, updatedUser: IUser): Promise<void> => {
// const client = new Client();
// await client.connect();
// const queryText = 'UPDATE usuarios SET name = $1, email = $2, phone = $3, password = $4, profilePicture = $5, username = $6 WHERE id = $7';
// await client.query(queryText, [
//   updatedUser.name,
//   updatedUser.email,
//   updatedUser.phone,
//   updatedUser.password,
//   updatedUser.profilePicture,
//   updatedUser.username,
//   userId
// ]);
// await client.end();
// };
// export default { createUser, getUsers, deleteUser, updateUser };
