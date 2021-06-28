import { Task, State } from '../../types';

export function getPendingTasksFromState(state: State): Array<Task> {
  const tasks = state.pendingIDs.map((id: string) => state.items[id]);

  return tasks;
}
