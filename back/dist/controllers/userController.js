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
const userService_1 = __importDefault(require("../services/userService"));
const multerConfig_1 = __importDefault(require("../middleware/multerConfig"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, multerConfig_1.default)(req, res, function (err) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (err) {
                return res.status(500).send({ message: 'Error uploading file.' });
            }
            const { name, email, phone, password, username } = req.body;
            const profilePicture = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
            const user = {
                name,
                email,
                phone,
                password,
                profilePicture,
                username
            };
            try {
                yield userService_1.default.registerUser(user);
                res.status(200).send({ message: 'Usuario registrado y correo enviado.', profilePicture });
            }
            catch (error) {
                res.status(500).send({ message: 'Error al registrar el usuario.', error });
            }
        });
    });
});
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService_1.default.getUsers();
        res.status(200).send(users);
    }
    catch (error) {
        res.status(500).send({ message: 'Error al obtener los usuarios.', error });
    }
});
exports.default = { register, getUsers };
