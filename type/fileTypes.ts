import {Request, Response} from 'express';

export interface ReadDirReq extends Request {
    prefixUrl: string;
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
    fullName: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    fileExtension: string;
}