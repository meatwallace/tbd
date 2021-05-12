import * as React from 'react';
import { TasksContext } from './TasksContext';
import { reducer } from './reducer';
import { INITIAL_STATE } from './consts';

type Props = {
  children: React.ReactNode;
};

// TODO: memoize
export function TasksProvider(props: Props) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const value = { state, dispatch };

  return <TasksContext.Provider value={value} {...props} />;
}
