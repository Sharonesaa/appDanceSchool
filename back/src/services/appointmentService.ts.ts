import { Appointment } from '../entities/Appointment';
import { AppointmentModel } from '../config/data-source';
import { AppointmentDTO } from '../dto/AppointmentDto';
import { UserModel } from '../config/data-source';
import { ClassModel } from '../config/data-source';

export const createAppointmentService = async (appointmentData: AppointmentDTO) => {
    const user = await UserModel.findOneBy({ id: appointmentData.userId });
    const classEntity = await ClassModel.findOneBy({ id: appointmentData.classId });

    if (!user || !classEntity) {
        throw new Error('User or Class not found');
    }

    const appointment = AppointmentModel.create({
        ...appointmentData,
        user,
        class: classEntity,
        status: 'active'
    });

    const newAppointment = await AppointmentModel.save(appointment);
    return newAppointment;
};

export const getAppointmentsService = async () => {
    const appointments = await AppointmentModel.find({ relations: ['user', 'class'] });
    return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
    const appointment = await AppointmentModel.findOne({ where: { id }, relations: ['user', 'class'] });
    return appointment;
};

export const cancelAppointmentService = async (id: number) => {
    const appointment = await AppointmentModel.findOneBy({ id });

    if (!appointment) {
        throw new Error('Appointment not found');
    }

    appointment.status = 'cancelled';
    const cancelledAppointment = await AppointmentModel.save(appointment);
    return cancelledAppointment;
};
