import { Router } from "express";
import {
  getUser,
  getUserByEmail,
  insertUser,
  updateUser,
} from "../controllers/usersController.js";
import multer from "multer";

const router = Router();

const upload = multer({ dest: "./uploads/avatars" });

router.get("/id/:id", getUser);
router.get("/email/:email", getUserByEmail);
router.put("/id/:id", upload.single("avatar"), updateUser);
router.post("/create", insertUser);

export default router;
