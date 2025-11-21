import { Router } from "express";
import { getUserInfo } from "../controllers/userInfoController.js";

const router = Router();

router.get("/:id", getUserInfo);

export default router;
