import mongoose, { ConnectOptions } from 'mongoose';
import {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
} from '../../environment';
import LocationDataModel from './models/LocationDataModel';

const initMongoose = async (): Promise<void> => {
  const mongoConnectUrl = DB_PORT
    ? `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    : `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

  mongoose.Promise = global.Promise;

  const mongooseOptions: ConnectOptions = {
    retryWrites: false,
    dbName: DB_NAME,
  };

  try {
    await mongoose.connect(mongoConnectUrl, mongooseOptions);
    console.info('Mongoose connected! 🦖');
  } catch (e) {
    console.error(e);
  }
};

export { initMongoose };
export { LocationDataModel };
