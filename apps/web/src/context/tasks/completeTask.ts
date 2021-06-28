import { CompleteAction, State, TaskStatus } from '../../types';

export function completeTask(state: State, action: CompleteAction): State {
  return {
    pendingIDs: state.pendingIDs.filter((id) => id !== action.payload.taskID),
    completedIDs: [action.payload.taskID, ...state.completedIDs],
    items: {
      ...state.items,
      [action.payload.taskID]: {
        ...state.items[action.payload.taskID],
        status: TaskStatus.Completed,
        updated: new Date(),
      },
    },
  };
}
