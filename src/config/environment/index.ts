import dotenv from 'dotenv';
dotenv.config();

const {
  NODE_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  IPWHO_API_URL,
} = process.env;

export {
  NODE_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  IPWHO_API_URL,
};
