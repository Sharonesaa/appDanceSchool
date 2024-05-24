// src/services/userService.ts

import { IUser } from '../Interfaces/IUser';
import nodemailer from 'nodemailer';
import nodemailerConfig from '../config/nodemailerConfig';
// Aquí deberías importar tu cliente de base de datos, por ejemplo pg para PostgreSQL

const registerUser = async (user: IUser): Promise<void> => {
  // Aquí deberías añadir la lógica para guardar el usuario y las credenciales en la base de datos.
  // Por ejemplo, usando pg (node-postgres):
  // const client = new Client();
  // await client.connect();
  // const queryText = 'INSERT INTO usuarios(name, email, phone, password, profilePicture, username) VALUES($1, $2, $3, $4, $5, $6) RETURNING id';
  // const res = await client.query(queryText, [user.name, user.email, user.phone, user.password, user.profilePicture, user.username]);
  // await client.end();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  // const mailOptions = {
  //   from: process.env.EMAIL,
  //   to: user.email,
  //   subject: 'Registro Exitoso',
  //   text: `Hola ${user.name}, gracias por registrarte.`
  // };

  // await transporter.sendMail(mailOptions);
};

const getUsers = async (): Promise<IUser[]> => {
  // Aquí deberías añadir la lógica para obtener los usuarios de la base de datos.
  // Por ejemplo, usando pg (node-postgres):
  // const client = new Client();
  // await client.connect();
  // const res = await client.query('SELECT * FROM usuarios');
  // await client.end();
  // return res.rows;

  return []; // Esto debe ser reemplazado por el resultado real de la base de datos
};

export default { registerUser, getUsers };
