import { Plan } from "../models/index.js";

export async function getPlan(req, res, next) {
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

export async function insertPlan(req, res, next) {
  try {
    const data = await Plan.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
