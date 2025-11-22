import { Router } from "express";
import {
  deleteWorkout,
  getWorkouts,
  insertWorkout,
} from "../controllers/workoutsController.js";

const router = Router();

router.get("/id/:id", getWorkouts);
router.post("/id/:id", insertWorkout);
router.delete("/id/:id", deleteWorkout);

export default router;
