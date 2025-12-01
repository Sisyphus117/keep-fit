import { UserInfo } from "../models/index.js";
import { Request, Response, NextFunction } from "express";

export async function getUserInfo(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = parseInt(req.params.id);
    const data = await UserInfo.findAll({
      where: { user_id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function updateUserInfo(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = parseInt(req.params.id);
    const data = await UserInfo.update(req.body, {
      where: { user_id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function insertUserInfo(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await UserInfo.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
