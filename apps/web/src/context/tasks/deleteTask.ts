import { DeleteAction, State } from '../../types';

export function deleteTask(state: State, action: DeleteAction): State {
  const items = { ...state.items };

  delete items[action.payload.taskID];

  return {
    ...state,
    pendingIDs: state.pendingIDs.filter((id) => id !== action.payload.taskID),
    completedIDs: state.completedIDs.filter(
      (id) => id !== action.payload.taskID,
    ),
    items,
  };
}
