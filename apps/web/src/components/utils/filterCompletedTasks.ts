import { Task, TaskStatus } from '../../types';

export function filterCompletedTasks(tasks: Array<Task>): Array<Task> {
  return tasks.filter((task) => task.status === TaskStatus.Completed);
}
