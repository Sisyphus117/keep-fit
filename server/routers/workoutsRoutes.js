import { Router } from "express";
import { getWorkouts } from "../controllers/workoutsController";

const router = Router();

router.get("/:id", getWorkouts);

export default router;
