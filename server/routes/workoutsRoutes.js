import { Router } from "express";
import {
  deleteWorkout,
  getWorkouts,
  getWorkoutsToday,
  insertWorkout,
} from "../controllers/workoutsController.js";

const router = Router();

router.get("/id/:id", getWorkouts);
router.get("/id/:id/today", getWorkoutsToday);
router.post("/id/:id", insertWorkout);
router.delete("/id/:id", deleteWorkout);

export default router;
