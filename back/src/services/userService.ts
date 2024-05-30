import {UserDto,  UserLoginDTO } from "../dto/UserDto";
import  {IUser}  from '../Interfaces/IUser';
import nodemailer from 'nodemailer';
import nodemailerConfig from '../config/nodemailerConfig';

// LOGICA DE CLASE

let users : IUser[] = [{
  id:1,
  name: "Sharon",
  email: "orianna@gmail.com",
  phone: "1170545821",
  password: "sole",
  profilePicture: "img.jpg",
  active : true
}]

let id : number =2 ;

export const createUserServices = async (userData: UserDto): Promise <IUser> => {
  const newUser : IUser = { 
    id,
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
    profilePicture: userData.profilePicture,
    active : userData.active,

  }
  users.push(newUser);
  id++;
  return newUser
}

export const getUsersService = async (): Promise <IUser[]> => {
  return users;
}

export const deleteUserService = async (id : number): Promise <void> => {
  users = users.filter((user : IUser) => {
    return user.id !== id
  })
}

export const getUserByIdService = (id: number): UserDto | null => {
  return users.find(user => user.id === id) || null;
};


export const loginUserService = (loginData: UserLoginDTO): UserDto | null => {
  const user = users.find(user => user.email === loginData.username);
  if (user && user.password === loginData.password) {
    return user;
  } else {
    return null;
  }
};



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


