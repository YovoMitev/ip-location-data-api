import Router from 'express';
import { LocationDataRouter } from './modules/locationData';

const appRouter = Router();
appRouter.use('/location-data/', LocationDataRouter);

export default appRouter;
