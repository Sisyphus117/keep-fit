import { UserInfo } from "../models/index.js";

export async function getUserInfo(req, res, next) {
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

export async function updateUserInfo(req, res, next) {
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

export async function insertUserInfo(req, res, next) {
  try {
    const data = await UserInfo.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}
