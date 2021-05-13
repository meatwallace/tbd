import { CreateAction, State } from '../../types';
import { createTask as createTaskObject } from '../../utils/createTask';

export function createTask(state: State, action: CreateAction): State {
  const task = createTaskObject({ title: action.payload.title });

  return {
    ids: [...state.ids, task.id],
    items: { ...state.items, [task.id]: task },
  };
}
