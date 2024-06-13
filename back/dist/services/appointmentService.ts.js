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
exports.cancelAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsService = exports.createAppointmentService = void 0;
const data_source_1 = require("../config/data-source");
const data_source_2 = require("../config/data-source");
const data_source_3 = require("../config/data-source");
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_2.UserModel.findOneBy({ id: appointmentData.userId });
    const classEntity = yield data_source_3.ClassModel.findOneBy({ id: appointmentData.classId });
    if (!user || !classEntity) {
        throw new Error('User or Class not found');
    }
    const appointment = data_source_1.AppointmentModel.create(Object.assign(Object.assign({}, appointmentData), { user, class: classEntity, status: 'active' }));
    const newAppointment = yield data_source_1.AppointmentModel.save(appointment);
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppointmentModel.find({ relations: ['user', 'class'] });
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.findOne({ where: { id }, relations: ['user', 'class'] });
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.findOneBy({ id });
    if (!appointment) {
        throw new Error('Appointment not found');
    }
    appointment.status = 'cancelled';
    const cancelledAppointment = yield data_source_1.AppointmentModel.save(appointment);
    return cancelledAppointment;
});
exports.cancelAppointmentService = cancelAppointmentService;
