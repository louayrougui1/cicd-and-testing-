import type { Task, CreateTaskDTO } from "../types/task.js";

let tasks: Task[] = [];
let counter = 1;

export function createTask(data: CreateTaskDTO): Task {
  const task: Task = {
    id: String(counter++),
    title: data.title,
    description: data.description,
    completed: false,
  };

  tasks.push(task);

  return task;
}

export function findAllTasks(): Task[] {
  return [...tasks];
}

export function findTaskById(id: string): Task | undefined {
  return tasks.find((task) => task.id === id);
}

export function deleteTask(id: string): boolean {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);

  return true;
}

export function clearTasks(): void {
  tasks = [];
  counter = 1;
}
