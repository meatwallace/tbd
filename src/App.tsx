import * as React from 'react';
import { AppContainer } from './components/AppContainer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TasksProvider } from './state/TasksProvider';
import { TaskList } from './components/TaskList';
import { CreateTaskInput } from './components/CreateTaskInput';

export function App() {
  return (
    <AppContainer>
      <TasksProvider>
        <Header>
          <CreateTaskInput />
        </Header>
        <Main>
          <TaskList />
        </Main>
      </TasksProvider>
    </AppContainer>
  );
}
