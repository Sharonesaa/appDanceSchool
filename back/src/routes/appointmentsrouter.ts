import { Router } from 'express';
import { createAppointment, getAppointments, cancelAppointment } from '../services/appointmentService.ts';
import auth from '../middleware/auth';

const appointmentRouter: Router = Router();

appointmentRouter.post('/', createAppointment);
appointmentRouter.get('/', auth, getAppointments);
appointmentRouter.delete('/:id', cancelAppointment); // Se asume que se cancela una cita específica por ID

export default appointmentRouter;

