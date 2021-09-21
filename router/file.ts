import express, {Router} from 'express';
import {readDir, readBaseDir, getFileMeta, getFile} from '../controller/file';
// TODO : Error 처리용 Request 처리
// TODO : JWT Middleware 처리하기

const fileRouter: Router = express.Router();

fileRouter.get('/', readBaseDir);
fileRouter.post('/dir', readDir);
fileRouter.post('/file', getFileMeta);
fileRouter.post('/getFile', getFile);

export default fileRouter;