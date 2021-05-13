import * as React from 'react';
import { AppContainer } from './components/AppContainer';
import { CreateTaskInput } from './components/CreateTaskInput';
import { ExportButton } from './components/ExportButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImportButton } from './components/ImportButton';
import { Main } from './components/Main';
import { TaskList } from './components/TaskList';
import { TasksFilters } from './components/TasksFilters';
import { TasksProvider } from './context/tasks';
import { TasksFilterProvider } from './context/tasksFilter';

export function App() {
  return (
    <AppContainer>
      <TasksProvider>
        <TasksFilterProvider>
          <Header>
            <CreateTaskInput />
            <TasksFilters />
          </Header>
          <Main>
            <TaskList />
          </Main>
          <Footer>
            <ExportButton />
            <ImportButton />
          </Footer>
        </TasksFilterProvider>
      </TasksProvider>
    </AppContainer>
  );
}
