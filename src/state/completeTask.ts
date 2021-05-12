import { CompleteAction, State, TaskStatus } from '../types';

export function completeTask(state: State, action: CompleteAction): State {
  // TODO: tidy up
  return {
    ids: state.ids,
    items: {
      ...state.items,
      [action.payload.taskID]: {
        ...state.items[action.payload.taskID],
        status: TaskStatus.Complete,
        updated: new Date(),
      },
    },
  };
}
