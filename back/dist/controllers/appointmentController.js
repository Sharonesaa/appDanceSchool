"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentHandler = exports.getAppointmentsHandler = exports.createAppointmentHandler = void 0;
const appointmentService_ts_1 = require("../services/appointmentService.ts");
const createAppointmentHandler = (req, res) => {
    const newAppointment = (0, appointmentService_ts_1.createAppointment)(req.body);
    res.status(201).json(newAppointment);
};
exports.createAppointmentHandler = createAppointmentHandler;
const getAppointmentsHandler = (req, res) => {
    const appointments = (0, appointmentService_ts_1.getAppointments)();
    res.status(200).json(appointments);
};
exports.getAppointmentsHandler = getAppointmentsHandler;
const cancelAppointmentHandler = (req, res) => {
    const { id } = req.params;
    const canceledAppointment = (0, appointmentService_ts_1.cancelAppointment)(id);
    if (canceledAppointment) {
        res.status(200).json(canceledAppointment);
    }
    else {
        res.status(404).json({ message: 'Appointment not found' });
    }
};
exports.cancelAppointmentHandler = cancelAppointmentHandler;
// Puedes exportar más controladores si es necesario
