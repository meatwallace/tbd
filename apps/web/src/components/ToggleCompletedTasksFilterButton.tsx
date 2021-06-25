import { Button, ThemeUICSSObject } from 'theme-ui';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { StatusFilter } from '../types';

const styles: ThemeUICSSObject = {
  marginBottom: 2,
};

export function ToggleCompletedTasksFilterButton() {
  const { setStatusFilter, filter } = useTasksFilter();

  const isCompletedTasksVisible = filter.status === StatusFilter.All;

  const toggleCompletedTasks = () => {
    if (isCompletedTasksVisible) {
      setStatusFilter(StatusFilter.Pending);
    } else {
      setStatusFilter(StatusFilter.All);
    }
  };

  const buttonText = isCompletedTasksVisible
    ? 'Hide completed tasks'
    : 'Show completed tasks';

  return (
    <Button onClick={toggleCompletedTasks} sx={styles}>
      {buttonText}
    </Button>
  );
}
