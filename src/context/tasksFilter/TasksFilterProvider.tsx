import * as React from 'react';
import { TasksFilterContext } from './TasksFilterContext';
import { StatusFilter } from '../../types';

type Props = {
  children: React.ReactNode;
};

// TODO: type filter state
const INITIAL_STATE = {
  status: StatusFilter.Pending,
};

export function TasksFilterProvider(props: Props) {
  // TODO: consider refactoring to reducer
  const [filter, setFilter] = React.useState(INITIAL_STATE);

  const setStatusFilter = (statusFilter: StatusFilter) =>
    setFilter({ ...filter, status: statusFilter });

  const value = { filter, setStatusFilter };

  return <TasksFilterContext.Provider value={value} {...props} />;
}
