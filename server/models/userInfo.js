import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const UserInfo = sequelize.define(
  "UserInfo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        isIn: [["Male", "Female", "Other"]],
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 120,
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 50,
        max: 250,
      },
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 20,
        max: 300,
      },
    },
  },
  {
    tableName: "user_info",
    timestamps: false,
  }
);

export default UserInfo;
