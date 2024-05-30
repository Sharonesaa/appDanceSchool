"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turnController_1 = require("../controllers/turnController");
const auth_1 = __importDefault(require("../middleware/auth"));
const turnsRouter = (0, express_1.Router)();
turnsRouter.post('/', turnController_1.createTurn);
turnsRouter.get('/', auth_1.default, turnController_1.getTurns);
turnsRouter.delete('/:id', turnController_1.cancelTurn); // Se asume que se cancela un turno específico por ID
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
// GET /appointment => Obtener el detalle de un turno específico.
// POST /appointment/schedule => Agendar un nuevo turno.
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
exports.default = turnsRouter;
