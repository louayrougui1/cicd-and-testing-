export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface CreateTaskDTO {
  title: string;
  description: string;
}
