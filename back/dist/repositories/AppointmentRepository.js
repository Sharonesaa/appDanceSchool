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
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entities/Appointment");
const AppointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).extend({
    findActiveAppointments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ where: { status: 'active' }, relations: ['user', 'class'] });
        });
    },
    findAppointmentsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ where: { user: { id: userId } }, relations: ['user', 'class'] });
        });
    },
    findAppointmentsByClassId(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({ where: { class: { id: classId } }, relations: ['user', 'class'] });
        });
    },
    cancelAppointmentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const appointment = yield this.findOne({ where: { id } });
            if (!appointment) {
                throw new Error('Appointment not found');
            }
            appointment.status = 'cancelled';
            return this.save(appointment);
        });
    }
});
exports.default = AppointmentRepository;
