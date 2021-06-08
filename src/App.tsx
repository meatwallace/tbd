import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { ExportButton } from './components/ExportButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImportButton } from './components/ImportButton';
import { Layout } from './components/Layout';
import { Main } from './components/Main';
import { TaskList } from './components/TaskList';
import { ToggleCompletedTasksFilterButton } from './components/ToggleCompletedTasksFilterButton';
import { TasksProvider } from './context/tasks';
import { TasksFilterProvider } from './context/tasksFilter';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TasksProvider>
        <TasksFilterProvider>
          <Layout>
            <Header>
              <ToggleCompletedTasksFilterButton />
            </Header>
            <Main>
              <TaskList />
            </Main>
            <Footer>
              <ExportButton />
              <ImportButton />
            </Footer>
          </Layout>
        </TasksFilterProvider>
      </TasksProvider>
    </ThemeProvider>
  );
}
