import React from 'react';
import invariant from 'tiny-invariant';
import { TasksContext } from '../context/tasks';
import { getPendingTasksFromState } from './utils/getPendingTasksFromState';
import { getCompletedTasksFromState } from './utils/getCompletedTasksFromState';
import { ActionType, State } from '../types';

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

  const importState = (state: State) =>
    dispatch({ type: ActionType.Import, payload: state });

  const reorderTask = (
    taskID: string,
    sourceIndex: number,
    destinationIndex: number,
  ) =>
    dispatch({
      type: ActionType.Reorder,
      payload: { taskID, sourceIndex, destinationIndex },
    });

  const uncompleteTask = (taskID: string) =>
    dispatch({ type: ActionType.Uncomplete, payload: { taskID } });

  const pendingTasks = getPendingTasksFromState(state);
  const completedTasks = getCompletedTasksFromState(state);

  return {
    state,
    pendingTasks,
    completedTasks,
    completeTask,
    createTask,
    deleteTask,
    importState,
    reorderTask,
    uncompleteTask,
  };
}
