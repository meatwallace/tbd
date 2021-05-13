import * as React from 'react';
import { StatusFilter } from '../../types';

export const TasksFilterContext = React.createContext<
  | {
      filter: { status: StatusFilter };
      setStatusFilter: (statusFilter: StatusFilter) => void;
    }
  | undefined
>(undefined);
