import { Request, Response, NextFunction } from "express";
import { Error } from "sequelize";

export function ErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "SequelizeUniqueConstraintError") {
    const message = err.message || "Unique Constraint Error";
    return res.status(409).json({
      success: false,
      error: message,
    });
  }

  if (err.name === "SequelizeValidationError") {
    const message = err.message || "Validation Error";
    return res.status(400).json({
      success: false,
      error: message,
    });
  }

  if (err.name === "SequelizeForeignKeyConstraintError") {
    const message = err.message || "ForeignKey Constraint Error";
    return res.status(400).json({
      success: false,
      error: message,
    });
  }
  const isProduction = process.env.NODE_ENV === "production";
  res.status(500).json({
    success: false,
    error: isProduction ? "Something went wrong with the server" : err.message,
  });
}
