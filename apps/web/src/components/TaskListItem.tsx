import * as React from 'react';
import { Button, Text } from 'theme-ui';
import { ListItem } from './ListItem';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types';
import { isTaskComplete } from '../utils/isTaskComplete';
import { isTaskPending } from '../utils/isTaskPending';

type Props = { task: Task };

const styles = {
  changeStatusButton: {
    marginRight: 1,
    flex: '0 0 auto',
  },
  title: {
    flex: '1 1 auto',
    marginRight: 1,
    paddingBottom: 2,
    paddingTop: 2,
  },
  deleteButton: {
    flex: '0 0 auto',
  },
};

export function TaskListItem(props: Props) {
  // TODO: review performance implication of including the hook in every list item
  const { completeTask, deleteTask, uncompleteTask } = useTasks();

  return (
    <ListItem>
      {isTaskPending(props.task) && (
        <Button
          onClick={() => completeTask(props.task.id)}
          variant="secondary"
          sx={styles.changeStatusButton}
        >
          Complete
        </Button>
      )}

      {isTaskComplete(props.task) && (
        <Button
          onClick={() => uncompleteTask(props.task.id)}
          variant="secondary"
          sx={styles.changeStatusButton}
        >
          Uncomplete
        </Button>
      )}

      <Text sx={styles.title}>{props.task.title}</Text>

      <Button
        onClick={() => deleteTask(props.task.id)}
        sx={styles.deleteButton}
      >
        Delete
      </Button>
    </ListItem>
  );
}
