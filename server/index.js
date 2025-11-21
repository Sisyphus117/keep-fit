import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/workouts", async (req, res) => {
  const data = await prisma.workout.findMany();
  res.json(data);
});

app.post("/workouts", async (req, res) => {
  const { name, reps } = req.body;
  const newWorkout = await prisma.workout.create({
    data: { name, reps },
  });
  res.json(newWorkout);
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
