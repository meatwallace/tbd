export enum DroppableID {
  TaskList = 'TASK_LIST',
}

export enum TaskStatus {
  Completed = 'COMPLETED',
  Pending = 'PENDING',
}

export enum ActionType {
  Complete = 'COMPLETE',
  Create = 'CREATE',
  Delete = 'DELETE',
  Import = ' IMPORT',
  Reorder = 'REORDER',
  Uncomplete = 'UNCOMPLETE',
}

export type CompleteAction = {
  type: ActionType.Complete;
  payload: { taskID: string };
};

export type CreateAction = {
  type: ActionType.Create;
  payload: {
    title: string;
  };
};

export type DeleteAction = {
  type: ActionType.Delete;
  payload: { taskID: string };
};

export type ImportAction = {
  type: ActionType.Import;
  payload: State;
};

export type ReorderAction = {
  type: ActionType.Reorder;
  payload: {
    taskID: string;
    sourceIndex: number;
    destinationIndex: number;
  };
};

export type UncompleteAction = {
  type: ActionType.Uncomplete;
  payload: { taskID: string };
};

export type Action =
  | CompleteAction
  | CreateAction
  | DeleteAction
  | ImportAction
  | ReorderAction
  | UncompleteAction;

export type Dispatch = (action: Action) => void;

export type State = {
  pendingIDs: Array<string>;
  completedIDs: Array<string>;
  items: { [id: string]: Task };
};

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  created: Date;
  updated: Date | null;
};

export enum StatusFilter {
  All,
  Pending,
}
