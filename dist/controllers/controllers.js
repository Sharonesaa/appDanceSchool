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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage }).single('profilePicture');
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    upload(req, res, function (err) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (err) {
                return res.status(500).send({ message: 'Error uploading file.' });
            }
            const { name, email, phone, password } = req.body;
            const profilePicture = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
            // Aquí puedes añadir lógica para guardar el usuario en la base de datos.
            const transporter = nodemailer_1.default.createTransport({
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
                yield transporter.sendMail(mailOptions);
                res.status(200).send({ message: 'Usuario registrado y correo enviado.', profilePicture });
            }
            catch (error) {
                res.status(500).send({ message: 'Error al enviar el correo.', error });
            }
        });
    });
});
exports.default = { register };
