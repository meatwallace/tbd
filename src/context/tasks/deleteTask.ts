import { DeleteAction, State } from '../../types';

export function deleteTask(state: State, action: DeleteAction): State {
  const ids = state.ids.filter((id) => id !== action.payload.taskID);
  const items = { ...state.items };

  delete items[action.payload.taskID];

  return { ids, items };
}
