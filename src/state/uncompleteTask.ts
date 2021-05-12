import { State, TaskStatus, UncompleteAction } from '../types';

export function uncompleteTask(state: State, action: UncompleteAction): State {
  // TODO: tidy up
  return {
    ids: state.ids,
    items: {
      ...state.items,
      [action.payload.taskID]: {
        ...state.items[action.payload.taskID],
        status: TaskStatus.Pending,
        updated: new Date(),
      },
    },
  };
}
