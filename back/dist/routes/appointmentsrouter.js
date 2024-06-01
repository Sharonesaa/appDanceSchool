"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentService_ts_1 = require("../services/appointmentService.ts");
const auth_1 = __importDefault(require("../middleware/auth"));
const appointmentRouter = (0, express_1.Router)();
appointmentRouter.post('/', appointmentService_ts_1.createAppointment);
appointmentRouter.get('/', auth_1.default, appointmentService_ts_1.getAppointments);
appointmentRouter.delete('/:id', appointmentService_ts_1.cancelAppointment); // Se asume que se cancela una cita específica por ID
exports.default = appointmentRouter;
