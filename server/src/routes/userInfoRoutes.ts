import { Router } from "express";
import {
  getUserInfo,
  insertUserInfo,
  updateUserInfo,
} from "../controllers/userInfoController.js";

const router = Router();

router.get("/id/:id", getUserInfo);
router.put("/id/:id", updateUserInfo);
router.post("/create", insertUserInfo);

export default router;
