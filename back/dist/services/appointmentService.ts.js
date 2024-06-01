"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.getAppointments = exports.createAppointment = void 0;
// Simula una base de datos en memoria
const appointments = [];
const createAppointment = (appointment) => {
    appointments.push(appointment);
    return appointment;
};
exports.createAppointment = createAppointment;
const getAppointments = () => {
    return appointments;
};
exports.getAppointments = getAppointments;
const cancelAppointment = (id) => {
    const index = appointments.findIndex(app => app.id === id);
    if (index !== -1) {
        const [deletedAppointment] = appointments.splice(index, 1);
        return deletedAppointment;
    }
    else {
        return null;
    }
};
exports.cancelAppointment = cancelAppointment;
// Puedes exportar más servicios si es necesario
