import express from "express";
import cors from "cors";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import workoutsRoutes from "./routers/workoutsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/userinfo", userInfoRoutes);
app.use("/users", usersRoutes);
app.use("/workouts", workoutsRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
