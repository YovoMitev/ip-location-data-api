import Router from 'express';
import { LocationDataController } from '.';

const router = Router();
router.get('/:ip', LocationDataController.getIpAddressDataAction);

export default router;
