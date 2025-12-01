import { Users } from "../models/index.js";
import { Request, Response, NextFunction } from "express";

export async function getUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = parseInt(req.params.id);
    const data = await Users.findOne({
      where: { id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function getUserByEmail(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const email = req.params.email;
    const data = await Users.findOne({
      where: { email },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = parseInt(req.params.id);
    if (req.file) {
      const avatarUrl = `/uploads/avatars/${req.file.filename}`;
      req.body.avatar_url = avatarUrl;
    }
    const data = await Users.update(req.body, {
      where: { id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function insertUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await Users.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
