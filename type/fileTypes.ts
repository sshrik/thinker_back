import {Request, Response} from 'express';

export interface ReadDirReq extends Request {
    postUrl: string;
}

export interface ReadDirRes {
    fileLists: string[];
}

export type DirForm = {
    nowDir: string;
    nowDirs: DirForm[];
    files: FileForm[];
}

export type FileForm = {
    fileName: string;
    fileSize: number;
    fileType: string;
    fileExtension: string;
}