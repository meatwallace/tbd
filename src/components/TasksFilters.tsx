import * as React from 'react';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { StatusFilter } from '../types';

export function TasksFilters() {
  const { setStatusFilter, filter } = useTasksFilter();

  return (
    <div>
      <button
        disabled={filter.status === StatusFilter.All}
        onClick={() => setStatusFilter(StatusFilter.All)}
      >
        all
      </button>

      <button
        disabled={filter.status === StatusFilter.Pending}
        onClick={() => setStatusFilter(StatusFilter.Pending)}
      >
        pending
      </button>

      <button
        disabled={filter.status === StatusFilter.Completed}
        onClick={() => setStatusFilter(StatusFilter.Completed)}
      >
        completed
      </button>
    </div>
  );
}
