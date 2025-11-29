export function ErrorHandler(err, req, res, next) {
  if (err.name === "SequelizeUniqueConstraintError") {
    const message =
      err.errors?.[0]?.message || err.message || "Unique Constraint Error";
    return res.status(409).json({
      success: false,
      error: message,
    });
  }

  if (err.name === "SequelizeValidationError") {
    const message =
      err.errors?.[0]?.message || err.message || "Validation Error";
    return res.status(400).json({
      success: false,
      error: message,
    });
  }

  if (err.name === "SequelizeForeignKeyConstraintError") {
    const message =
      err.errors?.[0]?.message || err.message || "ForeignKey Constraint Error";
    return res.status(400).json({
      success: false,
      error: message,
    });
  }

  if (err.statusCode && err.statusCode < 500) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  const isProduction = process.env.NODE_ENV === "production";
  res.status(500).json({
    success: false,
    error: isProduction ? "Something went wrong with the server" : err.message,
  });
}
