import express from "express";

import taskRoutes from "./routes/task.routes.js";

export const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

// Error handling middleware
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    const status = err.message === "Task not found" ? 404 : 400;

    res.status(status).json({
      message: err.message,
    });
  },
);
