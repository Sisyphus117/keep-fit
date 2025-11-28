import { Workouts } from "../models/index.js";

export async function getWorkouts(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const data = await Workouts.findAll({
      where: { user_id: userId },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function getWorkoutsToday(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const today = new Date().toISOString().split("T")[0];
    const data = await Workouts.findAll({
      where: { user_id: userId, date: today },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function insertWorkout(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    const data = await Workouts.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
}

export async function deleteWorkout(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const data = await Workouts.destroy({
      where: { id },
    });
    res.json(data);
  } catch (error) {
    next(error);
  }
}
