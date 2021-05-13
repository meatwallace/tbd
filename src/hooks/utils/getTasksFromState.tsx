import { Task, State } from '../../types';

export function getTasksFromState(state: State): Array<Task> {
  const tasks = state.ids.map((id: string) => state.items[id]);

  return tasks;
}
