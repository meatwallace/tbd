import { Task, TaskStatus } from '../../types';

export function filterPendingTasks(tasks: Array<Task>): Array<Task> {
  return tasks.filter((task) => task.status === TaskStatus.Pending);
}
