import { AppointmentDTO } from '../dto/TurnsDto'

// Simula una base de datos en memoria
const appointments: AppointmentDTO[] = [];

export const createAppointment = (appointment: AppointmentDTO): AppointmentDTO => {
  appointments.push(appointment);
  return appointment;
};

export const getAppointments = (): AppointmentDTO[] => {
  return appointments;
};

export const cancelAppointment = (id: string): AppointmentDTO | null => {
  const index = appointments.findIndex(app => app.id === id);
  if (index !== -1) {
    const [deletedAppointment] = appointments.splice(index, 1);
    return deletedAppointment;
  } else {
    return null;
  }
};

// Puedes exportar más servicios si es necesario
