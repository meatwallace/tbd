export enum TaskStatus {
  Completed = 'COMPLETED',
  Pending = 'PENDING',
}

export enum ActionType {
  Complete = 'COMPLETE',
  Create = 'CREATE',
  Delete = 'DELETE',
  Import = ' IMPORT',
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

export type UncompleteAction = {
  type: ActionType.Uncomplete;
  payload: { taskID: string };
};

export type Action =
  | CompleteAction
  | CreateAction
  | DeleteAction
  | ImportAction
  | UncompleteAction;

export type Dispatch = (action: Action) => void;

export type State = {
  ids: Array<string>;
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
  Completed,
  Pending,
}
