import Workouts from "../models/index.js";

export async function getWorkouts(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const data = await Workouts.findAll({
      where: { id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}
