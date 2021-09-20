import {config} from 'dotenv';
import express, {Request, Response} from 'express';
const app = express();

app.get('/', function (req: Request, res: Response) {
  res.send('BASE URL');
});

config();

const PORT = process.env.PORT;

let server = app.listen(PORT, () => {
  console.log('Server is working : PORT - ', PORT);
});
