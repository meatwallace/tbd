import { Task, State } from '../../types';

export function getCompletedTasksFromState(state: State): Array<Task> {
  const tasks = state.completedIDs.map((id: string) => state.items[id]);

  return tasks;
}
