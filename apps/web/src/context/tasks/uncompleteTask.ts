import { State, TaskStatus, UncompleteAction } from '../../types';

export function uncompleteTask(state: State, action: UncompleteAction): State {
  return {
    completedIDs: state.completedIDs.filter(
      (id) => id !== action.payload.taskID,
    ),
    pendingIDs: [...state.pendingIDs, action.payload.taskID],
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
