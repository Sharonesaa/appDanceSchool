import { Router } from 'express';
import { createAppointment, getAppointments, getAppointmentById, cancelAppointment } from '../controllers/appointmentController';
import auth from '../middleware/auth';

const appointmentRouter: Router = Router();

appointmentRouter.post('/schedule', createAppointment);
appointmentRouter.get('/', getAppointments);
appointmentRouter.get('/:id', getAppointmentById);
appointmentRouter.put('/cancel/:id', cancelAppointment);

export default appointmentRouter;

