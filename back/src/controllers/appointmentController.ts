import { Request, Response } from 'express';
import { createAppointment, getAppointments, cancelAppointment } from '../services/appointmentService.ts';

export const createAppointmentHandler = (req: Request, res: Response) => {
  const newAppointment = createAppointment(req.body);
  res.status(201).json(newAppointment);
};

export const getAppointmentsHandler = (req: Request, res: Response) => {
  const appointments = getAppointments();
  res.status(200).json(appointments);
};

export const cancelAppointmentHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const canceledAppointment = cancelAppointment(id);
  if (canceledAppointment) {
    res.status(200).json(canceledAppointment);
  } else {
    res.status(404).json({ message: 'Appointment not found' });
  }
};

// Puedes exportar más controladores si es necesario
