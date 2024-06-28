import AppointmentRepository from '../repositories/AppointmentRepository';
import { AppointmentDTO } from '../dto/AppointmentDto';
import { AppDataSource } from '../config/data-source';
import UserRepository from '../repositories/UserRepository';
import ClassRepository from '../repositories/ClassRepository';

export const createAppointmentService = async (appointmentData: AppointmentDTO) => {
  const user = await UserRepository.findOne({ where: { id: appointmentData.userId } });
  let classEntity;
  
  if (appointmentData.classId) {
    classEntity = await ClassRepository.findOne({ where: { id: appointmentData.classId } });
  } else {
    // Asignar la clase con id igual a 1 por defecto
    classEntity = await ClassRepository.findOne({ where: { id: 1 } });
  }
  
  if (!user) {
    throw new Error('User not found');
  }
  
  if (!classEntity) {
    throw new Error('Class not found');
  }

  const appointment = AppointmentRepository.create({
    ...appointmentData,
    user: user,
    class: classEntity,
    status: 'active'
  });

  const newAppointment = await AppointmentRepository.save(appointment);
  return newAppointment;
};

export const getAppointmentsService = async () => {
  const appointments = await AppointmentRepository.findActiveAppointments();
  return appointments;
};

export const getAppointmentByIdService = async (id: number) => {
  const appointment = await AppointmentRepository.findOne({ where: { id }, relations: ['user', 'class', 'class.style'] });
  return appointment;
};

export const getAppointmentsByUserService = async (userId: number) => {
  const appointments = await AppointmentRepository.findAppointmentsByUserId(userId);
  return appointments;
};

export const getAppointmentsByClassService = async (classId: number) => {
  const appointments = await AppointmentRepository.findAppointmentsByClassId(classId);
  return appointments;
};

export const cancelAppointmentService = async (id: number) => {
  const cancelledAppointment = await AppointmentRepository.cancelAppointmentById(id);
  return cancelledAppointment;
};