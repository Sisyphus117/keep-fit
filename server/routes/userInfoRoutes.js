import { Router } from "express";
import {
  getUserInfo,
  updateUserInfo,
} from "../controllers/userInfoController.js";

const router = Router();

router.get("/id/:id", getUserInfo);
router.put("/id/:id", updateUserInfo);

export default router;
