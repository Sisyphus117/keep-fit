import { Sequelize } from "sequelize";
const sequelize = new Sequelize("keepfit_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});

export default sequelize;
