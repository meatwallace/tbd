import { Task, StatusFilter } from '../../types';
import { filterPendingTasks } from './filterPendingTasks';
import { filterCompletedTasks } from './filterCompletedTasks';

export function filterTasksByStatus(
  tasks: Array<Task>,
  statusFilter: StatusFilter,
): Array<Task> {
  if (statusFilter === StatusFilter.All) {
    return tasks;
  }

  if (statusFilter === StatusFilter.Completed) {
    return filterCompletedTasks(tasks);
  }

  if (statusFilter === StatusFilter.Pending) {
    return filterPendingTasks(tasks);
  }

  console.log(tasks, statusFilter);

  throw new Error('Invalid task status filter provided');
}
