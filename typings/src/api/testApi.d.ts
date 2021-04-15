import { NextFunction, Request, Response } from "express";
export declare function getData(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function saveData(req: Request, res: Response, next: NextFunction): Promise<void>;
