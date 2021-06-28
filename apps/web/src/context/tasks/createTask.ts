import { nanoid } from 'nanoid';
import { CreateAction, State, TaskStatus } from '../../types';

export function createTask(state: State, action: CreateAction): State {
  const task = {
    id: nanoid(),
    title: action.payload.title,
    status: TaskStatus.Pending,
    created: new Date(),
    updated: null,
  };

  return {
    ...state,
    pendingIDs: [task.id, ...state.pendingIDs],
    items: { ...state.items, [task.id]: task },
  };
}
