import express, {Router} from 'express';
import {readDir} from '../controller/file';
// TODO : Error 처리용 Request 처리
// TODO : JWT Middleware 처리하기

const fileRouter: Router = express.Router();

fileRouter.post('/dir', readDir);

export default fileRouter;