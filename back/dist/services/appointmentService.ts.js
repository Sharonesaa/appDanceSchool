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
exports.cancelAppointmentService = exports.getAppointmentsByClassService = exports.getAppointmentsByUserService = exports.getAppointmentByIdService = exports.getAppointmentsService = exports.createAppointmentService = void 0;
const AppointmentRepository_1 = __importDefault(require("../repositories/AppointmentRepository"));
const data_source_1 = require("../config/data-source");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const ClassRepository_1 = __importDefault(require("../repositories/ClassRepository"));
const userRepository = data_source_1.AppDataSource.getCustomRepository(UserRepository_1.default);
const classRepository = data_source_1.AppDataSource.getCustomRepository(ClassRepository_1.default);
const appointmentRepository = data_source_1.AppDataSource.getCustomRepository(AppointmentRepository_1.default);
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findOne({ where: { id: appointmentData.userId } });
    let classEntity;
    if (appointmentData.classId) {
        classEntity = yield classRepository.findOne({ where: { id: appointmentData.classId } });
    }
    else {
        // Asignar la clase con id igual a 1 por defecto
        classEntity = yield classRepository.findOne({ where: { id: 1 } });
    }
    if (!user || !classEntity) {
        throw new Error('User or Class not found');
    }
    const appointment = appointmentRepository.create(Object.assign(Object.assign({}, appointmentData), { user, class: classEntity, status: 'active' }));
    const newAppointment = yield appointmentRepository.save(appointment);
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmentRepository.findActiveAppointments();
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentRepository.findOne({ where: { id }, relations: ['user', 'class'] });
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const getAppointmentsByUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmentRepository.findAppointmentsByUserId(userId);
    return appointments;
});
exports.getAppointmentsByUserService = getAppointmentsByUserService;
const getAppointmentsByClassService = (classId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointmentRepository.findAppointmentsByClassId(classId);
    return appointments;
});
exports.getAppointmentsByClassService = getAppointmentsByClassService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cancelledAppointment = yield appointmentRepository.cancelAppointmentById(id);
    return cancelledAppointment;
});
exports.cancelAppointmentService = cancelAppointmentService;
