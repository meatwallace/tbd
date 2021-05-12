import * as React from 'react';
import { TasksContext } from './TasksContext';
import { reducer } from './reducer';
import { getInitialState } from './getInitialState';
import { persistState } from './persistState';

type Props = {
  children: React.ReactNode;
};

const initialState = getInitialState();

// TODO: memoize
export function TasksProvider(props: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => persistState(state), [state]);

  const value = { state, dispatch };

  return <TasksContext.Provider value={value} {...props} />;
}
