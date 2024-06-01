// routes/index.ts
import { Router } from 'express';
import userRouter from './usersRouter';
import appointmentRouter from './appointmentsrouter';


const router: Router = Router();

router.use('/users', userRouter);
router.use('/appointments', appointmentRouter);


export default router;
