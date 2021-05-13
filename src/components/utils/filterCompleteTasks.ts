import { Task, TaskStatus } from '../../types';

export function filterCompleteTasks(tasks: Array<Task>): Array<Task> {
  return tasks.filter((task) => task.status === TaskStatus.Complete);
}
