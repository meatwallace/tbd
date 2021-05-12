export enum TaskStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Uncomplete = 'UNCOMPLETE',
}

export enum ActionType {
  Complete = 'COMPLETE',
  Create = 'CREATE',
  Delete = 'DELETE',
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

export type UncompleteAction = {
  type: ActionType.Uncomplete;
  payload: { taskID: string };
};

export type Action =
  | CompleteAction
  | CreateAction
  | DeleteAction
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
