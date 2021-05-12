import * as React from 'react';
import { AppContainer } from './components/AppContainer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { TasksProvider } from './state/TasksProvider';
import { TaskList } from './components/TaskList';
import { CreateTaskInput } from './components/CreateTaskInput';
import { Footer } from './components/Footer';
import { ExportButton } from './components/ExportButton';
import { ImportButton } from './components/ImportButton';

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
        <Footer>
          <ExportButton />
          <ImportButton />
        </Footer>
      </TasksProvider>
    </AppContainer>
  );
}
