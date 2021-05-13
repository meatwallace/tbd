import * as React from 'react';
import invariant from 'tiny-invariant';
import { TasksFilterContext } from '../context/tasksFilter';

export function useTasksFilter() {
  const context = React.useContext(TasksFilterContext);

  invariant(
    context,
    'useTasksFilter must be used within a TasksFilterProvider',
  );

  return context;
}
