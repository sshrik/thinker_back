import {Request, Response} from 'express';

export interface ReadDirReq extends Request {
    prefixUrl: string;
}

export interface ReadDirRes {
    fileLists: string[];
}