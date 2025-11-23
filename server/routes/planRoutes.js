import { Router } from "express";
import { getPlan, insertPlan } from "../controllers/planController.js";

const router = Router();

router.get("/id/:id", getPlan);
router.post("/id/:id", insertPlan);

export default router;
