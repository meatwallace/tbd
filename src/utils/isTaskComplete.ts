import { Task, TaskStatus } from '../types';

export function isTaskComplete(task: Task): boolean {
  return task.status === TaskStatus.Complete;
}
