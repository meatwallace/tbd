import * as React from 'react';
import invariant from 'tiny-invariant';
import { TasksContext } from './TasksContext';
import { ActionType } from '../types';

export function useTasks() {
  const context = React.useContext(TasksContext);

  invariant(context, 'useTasks must be used within a TasksProvider');

  const { state, dispatch } = context;

  const completeTask = (taskID: string) =>
    dispatch({ type: ActionType.Complete, payload: { taskID } });

  const createTask = (task: { title: string }) =>
    dispatch({ type: ActionType.Create, payload: task });

  const deleteTask = (taskID: string) =>
    dispatch({ type: ActionType.Delete, payload: { taskID } });

  const uncompleteTask = (taskID: string) =>
    dispatch({ type: ActionType.Uncomplete, payload: { taskID } });

  const tasks = state.ids.map((id: string) => state.items[id]);

  return {
    state,
    tasks,
    completeTask,
    createTask,
    deleteTask,
    uncompleteTask,
  };
}
