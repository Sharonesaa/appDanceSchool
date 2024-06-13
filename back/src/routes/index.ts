// routes/index.ts
import { Router } from 'express';
import userRouter from './usersRouter';
import credentialRouter from './credentialRouter';
import roleRoutes from './roleRoutes';
import appointmentRouter from './appointmentsrouter';
import classRouter from './classRouter'
import styleRouter from './styleRouter'


const router: Router = Router();

router.use('/user', userRouter);
router.use('/users', credentialRouter);
router.use('/turns', appointmentRouter);
router.use('/roles', roleRoutes)
router.use('/classes',classRouter)
router.use('/styles',styleRouter)


export default router;
