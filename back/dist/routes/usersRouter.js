"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const auth_1 = __importDefault(require("../middleware/auth"));
const usersRouter = (0, express_1.Router)();
usersRouter.post('/', userController_1.createUser);
usersRouter.get('/', auth_1.default, userController_1.getUsers);
usersRouter.delete('/', userController_1.deleteUser);
// GET /users/:id => Obtener el detalle de un usuario específico.
// POST /users/login => Login del usuario a la aplicación.
exports.default = usersRouter;
