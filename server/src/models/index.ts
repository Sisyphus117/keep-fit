import Workouts from "./workouts.js";
import UserInfo from "./userInfo.js";
import Plan from "./plan.js";
import Users from "./users.js";

Users.hasOne(UserInfo, {
  foreignKey: "user_id",
  as: "userInfo",
  onDelete: "CASCADE",
});

UserInfo.belongsTo(Users, {
  foreignKey: "user_id",
  as: "user",
});

Users.hasMany(Workouts, {
  foreignKey: "user_id",
  as: "workouts",
  onDelete: "CASCADE",
});

Workouts.belongsTo(Users, {
  foreignKey: "user_id",
  as: "user",
});

Users.hasMany(Plan, {
  foreignKey: "user_id",
  as: "plans",
  onDelete: "CASCADE",
});

Plan.belongsTo(Users, {
  foreignKey: "user_id",
  as: "user",
});

const models = {
  Users,
  Workouts,
  UserInfo,
  Plan,
};

export { Users, Workouts, UserInfo, Plan };
export default models;
