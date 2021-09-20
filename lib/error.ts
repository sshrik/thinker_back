import {Response} from 'express';

class ErrorHandler {
    type: string;
    message: string;
    status: number;
    constructor(type: string, message:string, status: number) {
        this.type = type;
        this.message = message;        
        this.status = status;
    }
    send(res: Response) {
        const errorResult = {type: this.type, message: this.message};
        res.status(this.status).json(errorResult);
    }
}

export default ErrorHandler;