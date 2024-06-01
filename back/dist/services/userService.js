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
exports.loginUserService = exports.getUserByIdService = exports.deleteUserService = exports.getUsersService = exports.createUserService = void 0;
let users = [{
        id: 1,
        name: "Sharon",
        email: "orianna@gmail.com",
        phone: "1170545821",
        password: "sole",
        profilePicture: "img.jpg",
        active: true,
        credentialsId: 1
    },
    {
        id: 2,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        password: "securepassword",
        profilePicture: "profile.jpg",
        active: true,
        credentialsId: 2
    }];
let credentials = [];
let id = 1;
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    // Generar credenciales automáticas
    const username = generateUsername(userData.name);
    const password = generatePassword();
    // Crear la credencial y obtener su ID
    const credentialsId = createCredential(username, password);
    // Crear el nuevo usuario
    const newUser = {
        id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        profilePicture: userData.profilePicture,
        active: userData.active,
        credentialsId
    };
    users.push(newUser);
    id++;
    return newUser;
});
exports.createUserService = createUserService;
// Generar un nombre de usuario basado en el nombre completo
const generateUsername = (fullName) => {
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0].toLowerCase();
    const lastName = nameParts[nameParts.length - 1].toLowerCase();
    return `${firstName}.${lastName}`;
};
// Generar una contraseña aleatoria
const generatePassword = () => {
    // Lógica para generar una contraseña aleatoria
    return 'password'; // Aquí debes implementar tu lógica real
};
// Crear una credencial y obtener su ID
const createCredential = (username, password) => {
    const newCredential = {
        id,
        username,
        password
    };
    credentials.push(newCredential);
    id++;
    return newCredential.id;
};
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUsersService = getUsersService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => user.id !== id);
});
exports.deleteUserService = deleteUserService;
const getUserByIdService = (id) => {
    return users.find(user => user.id === id) || null;
};
exports.getUserByIdService = getUserByIdService;
const loginUserService = (loginData) => {
    const { username, password } = loginData;
    const credential = credentials.find(c => c.username === username && c.password === password);
    if (credential) {
        const user = users.find(u => u.credentialsId === credential.id);
        return user || null;
    }
    else {
        return null;
    }
};
exports.loginUserService = loginUserService;
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
