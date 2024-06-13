import { Request, Response } from 'express';
import { createAppointmentService, getAppointmentsService, getAppointmentByIdService, cancelAppointmentService } from '../services/appointmentService.ts';
import { AppointmentDTO } from '../dto/AppointmentDto';

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentData: AppointmentDTO = req.body;
        const newAppointment = await createAppointmentService(appointmentData);
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ message: 'Error creating appointment', error });
    }
};

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({ message: 'Error fetching appointments', error });
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
      const appointmentId = parseInt(req.params.id, 10); // Convertir el parámetro a número
      if (isNaN(appointmentId)) {
          return res.status(400).json({ message: 'Invalid appointment ID' });
      }
      const appointment = await getAppointmentByIdService(appointmentId);
      if (appointment) {
          res.status(200).json(appointment);
      } else {
          res.status(404).json({ message: 'Appointment not found' });
      }
  } catch (error) {
      res.status(500).json({ message: 'Error fetching appointment', error });
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId = parseInt(req.params.id, 10);
        const cancelledAppointment = await cancelAppointmentService(appointmentId);

        if (cancelledAppointment) {
            res.status(200).json(cancelledAppointment);
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling appointment', error });
    }
};
