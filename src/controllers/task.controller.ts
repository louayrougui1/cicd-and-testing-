import type { Request, Response, NextFunction } from "express";

import * as taskService from "../services/task.service.js";

export function create(req: Request, res: Response, next: NextFunction) {
  try {
    const task = taskService.createTask({
      title: req.body.title,
      description: req.body.description,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}

export function getAll(_req: Request, res: Response) {
  res.json(taskService.getTasks());
}

export function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    if (typeof id !== "string" || !id.trim()) {
      throw new Error("Task ID is required");
    }
    const task = taskService.getTask(id!);

    res.json(task);
  } catch (error) {
    next(error);
  }
}

export function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid task ID" });
      return;
    }

    taskService.removeTask(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
