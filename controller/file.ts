import fs from 'fs';
import { Request, Response } from 'express';
import { ReadDirReq, ReadDirRes, FileForm } from '../type/fileTypes';
import { setFileType, getFullPath } from '../util/fileUtils';

export function readBaseDir(req: Request, res: Response) {
    const result = fs.readdirSync(process.env.BASE_URL + "");
    res.json(result);
}

export function getFileMeta(req: Request, res: Response) {
    const { fileUrl } = req.body;
    const fullName = getFullPath(fileUrl);
    const fileStat = fs.statSync(fullName);

    const fileName = fileUrl;
    const splitFileNames: string[] = fileName.split(".");
    const fileExtension = splitFileNames[splitFileNames.length - 1];
    const {size} = fileStat;
    
    const result: FileForm = {
        fileName,
        fileExtension,
        fileSize: size,
        fileType: setFileType(fileExtension),
    }

    res.json(result);
}

export function readDir(req: Request, res: Response) {
    const {postUrl} : ReadDirReq = req.body;
    const readDirLocation: string = getFullPath(postUrl);
    const fileLists = fs.readdirSync(readDirLocation);

    const result : ReadDirRes = { fileLists };

    res.json(result);
}

export function getFile(req: Request, res: Response) {
    const { fileUrl } = req.body;

    res.sendFile(getFullPath(fileUrl));
}