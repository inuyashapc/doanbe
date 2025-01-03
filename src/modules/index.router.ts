import { NextFunction, Request, Response, Router } from 'express';
import errorHandler from '../utils/errorHandler';
import guestRouter from './guest/index.router';
import hostRouter from './host/host.router';
import middleware from './index.middleware';
import authRouter from './auth/auth.router';
import adminRouter from './admin/admin.router';
import userRouter from './user/user.router';
import { ResponseHandler } from '../outcomes/responseHandler';

const routes: Router = Router();

routes.use('/', guestRouter);
routes.use('/auth', authRouter);
routes.use('/user', middleware.player, userRouter);
routes.use('/admin', middleware.admin, adminRouter);
routes.use('/host', middleware.host, hostRouter);

routes.use(errorHandler);
export default routes;
