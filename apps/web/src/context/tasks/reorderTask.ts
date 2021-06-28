import { ReorderAction, State } from '../../types';

export function reorderTask(state: State, action: ReorderAction): State {
  const ids = [...state.pendingIDs];

  ids.splice(action.payload.sourceIndex, 1);
  ids.splice(action.payload.destinationIndex, 0, action.payload.taskID);

  return {
    ...state,
    pendingIDs: ids,
  };
}
