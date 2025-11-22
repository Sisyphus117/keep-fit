import { Users } from "../models/index.js";

export async function getUser(req, res, next) {
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

export async function getUserByEmail(req, res, next) {
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
