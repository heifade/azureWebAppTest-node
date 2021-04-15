import { Request } from "express";
interface IHeader {
    user: string;
    dataRightBuIds: string;
    token: string;
    version: string;
}
export declare class HeaderHelper {
    static getHeaders(req: Request): IHeader;
}
export {};
