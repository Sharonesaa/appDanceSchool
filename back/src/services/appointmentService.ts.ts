import AppointmentRepository from '../repositories/AppointmentRepository';
import { AppointmentDTO } from '../dto/AppointmentDto';
import { AppDataSource } from '../config/data-source';
import UserRepository from '../repositories/UserRepository';
import ClassRepository from '../repositories/ClassRepository';

const userRepository = AppDataSource.getCustomRepository(UserRepository);
const classRepository = AppDataSource.getCustomRepository(ClassRepository);
const appointmentRepository = AppDataSource.getCustomRepository(AppointmentRepository);

export const createAppointmentService = async (appointmentData: AppointmentDTO) => {
  const user = await userRepository.findOne({ where: { id: appointmentData.userId } });
  let classEntity;

  if (appointmentData.classId) {
    classEntity = await classRepository.findOne({ where: { id: appointmentData.classId } });
  } else {
    // Asignar la clase con id igual a 1 por defecto
    classEntity = await classRepository.findOne({ where: { id: 1 } });
  }

  if (!user || !classEntity) {
    throw new Error('User or Class not found');
  }

  const appointment = appointmentRepository.create({
    ...appointmentData,
    user,
    class: classEntity,
    status: 'active'
  });

  const newAppointment = await appointmentRepository.save(appointment);
  return newAppointment;
};

export const getAppointmentsService = async () => {
  const appointments = await appointmentRepository.findActiveAppointments();
  return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
  const appointment = await appointmentRepository.findOne({ where: { id }, relations: ['user', 'class'] });
  return appointment;
};

export const getAppointmentsByUserService = async (userId: number) => {
  const appointments = await appointmentRepository.findAppointmentsByUserId(userId);
  return appointments;
};

export const getAppointmentsByClassService = async (classId: number) => {
  const appointments = await appointmentRepository.findAppointmentsByClassId(classId);
  return appointments;
};

export const cancelAppointmentService = async (id: number) => {
  const cancelledAppointment = await appointmentRepository.cancelAppointmentById(id);
  return cancelledAppointment;
};