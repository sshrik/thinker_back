import fs from 'fs';
import { Request, Response } from 'express';
import { ReadDirReq, ReadDirRes } from '@type/fileTypes';

export function readDir(req: Request, res: Response) {
    const {prefixUrl} = req.body;
    const fileLists = fs.readdirSync(process.env.BASE_URL + "/" + prefixUrl);

    const result : ReadDirRes = { fileLists };

    res.json(result);
}