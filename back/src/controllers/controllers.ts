import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
});

const upload = multer({ storage: storage }).single('profilePicture');

const register = async (req: Request, res: Response) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).send({ message: 'Error uploading file.' });
    }

    const { name, email, phone, password } = req.body;
    const profilePicture = req.file?.path;

    // Aquí puedes añadir lógica para guardar el usuario en la base de datos.

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Registro Exitoso',
      text: `Hola ${name}, gracias por registrarte.`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ message: 'Usuario registrado y correo enviado.', profilePicture });
    } catch (error) {
      res.status(500).send({ message: 'Error al enviar el correo.', error });
    }
  });
};

export default { register };
