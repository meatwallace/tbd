import { Task, TaskStatus } from '../types';

export function isTaskPending(task: Task): boolean {
  return task.status === TaskStatus.Pending;
}
