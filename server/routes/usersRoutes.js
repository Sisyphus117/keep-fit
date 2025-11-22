import { Router } from "express";
import { getUser, getUserByEmail } from "../controllers/usersController.js";

const router = Router();

router.get("/id/:id", getUser);
router.get("/email/:email", getUserByEmail);

export default router;
