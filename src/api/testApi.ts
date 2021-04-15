import { NextFunction, Request, Response } from "express";
import { Result } from "../entity/Result";
import { HeaderHelper } from "../utils/headerHelper";

export async function getData(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = HeaderHelper.getHeaders(req);

    res.send(new Result({ data: "获取成功", count: 1 }));
  } catch (e) {
    next(e);
  }
}

export async function saveData(req: Request, res: Response, next: NextFunction) {
  try {
    const { token } = HeaderHelper.getHeaders(req);

    res.send(new Result({ data: "保存成功", count: 1 }));
  } catch (e) {
    next(e);
  }
}
