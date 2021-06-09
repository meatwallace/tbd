import * as React from 'react';
import { Dispatch, State } from '../../types';

export const TasksContext =
  React.createContext<
    | {
        state: State;
        dispatch: Dispatch;
      }
    | undefined
  >(undefined);
