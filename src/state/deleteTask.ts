import { DeleteAction, State, TaskStatus } from "../types";

export function deleteTask(state: State, action: DeleteAction): State {
  // TODO: tidy up
  return {
    ids: state.ids.filter((id) => id === action.payload.taskID),
    items: {
      ...state.items,
      [action.payload.taskID]: {
        ...state.items[action.payload.taskID],
        status: TaskStatus.Deleted,
        updated: new Date()
      }
    }
  };
}
