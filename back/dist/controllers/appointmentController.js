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
exports.cancelAppointment = exports.getAppointmentById = exports.getAppointments = exports.createAppointment = void 0;
const appointmentService_ts_1 = require("../services/appointmentService.ts");
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentData = req.body;
        const newAppointment = yield (0, appointmentService_ts_1.createAppointmentService)(appointmentData);
        res.status(201).json(newAppointment);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).json({ message: 'Error creating appointment', error: e.message });
        }
        else {
            res.status(400).json({ message: 'Unexpected error creating appointment', error: 'Unknown error' });
        }
    }
});
exports.createAppointment = createAppointment;
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentService_ts_1.getAppointmentsService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: 'Error fetching appointments', error });
    }
});
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = parseInt(req.params.id, 10); // Convertir el parámetro a número
        if (isNaN(appointmentId)) {
            return res.status(400).json({ message: 'Invalid appointment ID' });
        }
        const appointment = yield (0, appointmentService_ts_1.getAppointmentByIdService)(appointmentId);
        if (appointment) {
            res.status(200).json(appointment);
        }
        else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching appointment', error });
    }
});
exports.getAppointmentById = getAppointmentById;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = parseInt(req.params.id, 10);
        const cancelledAppointment = yield (0, appointmentService_ts_1.cancelAppointmentService)(appointmentId);
        if (cancelledAppointment) {
            res.status(200).json(cancelledAppointment);
        }
        else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error cancelling appointment', error });
    }
});
exports.cancelAppointment = cancelAppointment;
