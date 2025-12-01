import { Request, Response, NextFunction } from "express";
import { Plan } from "../models/index.js";

export async function getPlan(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = parseInt(req.params.id);
    const data = await Plan.findOne({
      where: { user_id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function insertPlan(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await Plan.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
