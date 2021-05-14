import * as React from 'react';
import { Button, Flex } from 'theme-ui';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { StatusFilter } from '../types';

const styles = {
  container: {
    justifyContent: 'center',
  },
  button: {
    ':not(:last-child)': {
      marginRight: 1,
    },
  },
};

export function TasksFilters() {
  const { setStatusFilter, filter } = useTasksFilter();

  return (
    <Flex sx={styles.container}>
      <Button
        disabled={filter.status === StatusFilter.All}
        onClick={() => setStatusFilter(StatusFilter.All)}
        sx={styles.button}
      >
        All
      </Button>

      <Button
        disabled={filter.status === StatusFilter.Pending}
        onClick={() => setStatusFilter(StatusFilter.Pending)}
        sx={styles.button}
      >
        Pending
      </Button>

      <Button
        disabled={filter.status === StatusFilter.Completed}
        onClick={() => setStatusFilter(StatusFilter.Completed)}
        sx={styles.button}
      >
        Completed
      </Button>
    </Flex>
  );
}
