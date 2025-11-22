import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["email"],
      },
    ],
  }
);

export default Users;
