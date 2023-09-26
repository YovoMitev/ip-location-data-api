import express from 'express';
import bodyParser from 'body-parser';
import { NODE_PORT } from './config/environment';
import { initMongoose } from './config/db/mongoose';
import appRouter from './router';

initMongoose();
const app = express();
const port = NODE_PORT || 3000;

app.use(bodyParser.json());
app.use('/api', appRouter);

app.listen(port, () => console.info(`Server is running on port ${port}! 🚀`));
