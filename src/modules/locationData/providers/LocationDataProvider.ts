import { ILocationData } from '../../../common/interfaces';
import { LocationDataModel } from '../../../config/db/mongoose';

export const findDataByIp = (ip: string) =>
  LocationDataModel.findOne({ ip }).lean();

export const createIpLocationData = (payload: ILocationData) =>
  LocationDataModel.create(payload);
