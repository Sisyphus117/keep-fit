import express from "express";
import cors from "cors";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import workoutsRoutes from "./routes/workoutsRoutes.js";
import planRoutes from "./routes/planRoutes.js";
import path from "path";
import { ErrorHandler } from "./errorHandler.js";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/userinfo", userInfoRoutes);
app.use("/users", usersRoutes);
app.use("/workouts", workoutsRoutes);
app.use("/plan", planRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "route not found",
    path: req.originalUrl,
  });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) =>
  ErrorHandler(error, req, res, next)
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
