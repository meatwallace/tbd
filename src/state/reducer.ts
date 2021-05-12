import { Action, State, ActionType } from "../types";
import { completeTask } from "./completeTask";
import { createTask } from "./createTask";
import { deleteTask } from "./deleteTask";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.Create: {
      return createTask(state, action);
    }

    case ActionType.Delete: {
      return deleteTask(state, action);
    }

    case ActionType.Complete: {
      return completeTask(state, action);
    }

    default: {
      throw new Error("Unsupported action type");
    }
  }
}
