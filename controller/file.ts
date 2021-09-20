import fs from 'fs';
import { Request, Response } from 'express';
import { ReadDirReq, ReadDirRes } from '../type/fileTypes';

export function readDir(req: Request, res: Response) {
    const {prefixUrl} : ReadDirReq= req.body;
    const readDirLocation: string = prefixUrl ? process.env.BASE_URL + prefixUrl : process.env.BASE_URL + "";
    const fileLists = fs.readdirSync(readDirLocation);

    const result : ReadDirRes = { fileLists };

    res.json(result);
}