import {config} from 'dotenv';
import express from 'express';
import fileRouter from '@router/file';

const app = express();

config();

const PORT = process.env.PORT;
app.use(fileRouter);

let server = app.listen(PORT, () => {
  console.log('Server is working : PORT - ', PORT);
});
