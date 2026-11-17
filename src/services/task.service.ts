import * as taskRepository from "../repositories/task.repository.js";

import type { CreateTaskDTO } from "../types/task.js";

export function createTask(data: CreateTaskDTO) {
  if (!data.title || !data.title.trim()) {
    throw new Error("Task title is required");
  }

  if (!data.description || !data.description.trim()) {
    throw new Error("Task description is required");
  }

  return taskRepository.createTask({
    title: data.title.trim(),
    description: data.description.trim(),
  });
}

export function getTasks() {
  return taskRepository.findAllTasks();
}

export function getTask(id: string) {
  const task = taskRepository.findTaskById(id);

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
}

export function removeTask(id: string) {
  const deleted = taskRepository.deleteTask(id);

  if (!deleted) {
    throw new Error("Task not found");
  }
}
