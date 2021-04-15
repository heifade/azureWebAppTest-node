import { NextFunction, Request, Response } from "express";
import { ServerError } from "../entity/serverError";
export declare function apiError(e: ServerError, req: Request, res: Response, next: NextFunction): void;
