import { Router } from "express";
import {
  getUser,
  getUserByEmail,
  updateUser,
} from "../controllers/usersController.js";
import multer from "multer";

const router = Router();

const upload = multer({ dest: "./uploads/avatars" });

router.get("/id/:id", getUser);
router.get("/email/:email", getUserByEmail);
router.put("/id/:id", upload.single("avatar"), updateUser);

export default router;
