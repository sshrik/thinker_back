import fs from 'fs';
import { Request, Response } from 'express';
import { ReadDirReq, ReadDirRes } from '../type/fileTypes';
import { DEFAULT_GEN_FILE_NAME } from '../constant/strings';

export function readBaseDir(req: Request, res: Response) {
    const result = fs.readFileSync(DEFAULT_GEN_FILE_NAME);
    res.json(result);
}


export function readDir(req: Request, res: Response) {
    const {prefixUrl} : ReadDirReq= req.body;
    const readDirLocation: string = prefixUrl ? process.env.BASE_URL + prefixUrl : process.env.BASE_URL + "";
    const fileLists = fs.readdirSync(readDirLocation);

    const result : ReadDirRes = { fileLists };

    res.json(result);
}