import { theme } from '@tbd/theme';
import { ThemeProvider } from 'theme-ui';
import { BrandLogo } from './components/BrandLogo';
import { DarkModeToggle } from './components/DarkModeToggle';
import { ExportButton } from './components/ExportButton';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ImportButton } from './components/ImportButton';
import { Layout } from './components/Layout';
import { Main } from './components/Main';
import { TaskList } from './components/TaskList';
import { TasksProvider } from './context/tasks';
import { TasksFilterProvider } from './context/tasksFilter';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TasksProvider>
        <TasksFilterProvider>
          <Layout>
            <Header>
              <BrandLogo />
              <DarkModeToggle />
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
