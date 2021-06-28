import React from 'react';
import { Button, Text, ThemeUICSSObject } from 'theme-ui';
import * as Icon from './Icon';
import { ListItem } from './ListItem';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types';
import { isTaskComplete } from '../utils/isTaskComplete';
import { isTaskPending } from '../utils/isTaskPending';

type Props = {
  children?: React.ReactNode;
  task: Task;
  sx?: ThemeUICSSObject;
};

const styles: { [key: string]: ThemeUICSSObject } = {
  changeStatusButton: {
    color: 'neutral',
    flex: '0 0 auto',
    marginRight: 1,
  },
  title: {
    flex: '1 1 auto',
    marginRight: 1,
    paddingBottom: 2,
    paddingTop: 2,
  },
  deleteButton: {
    color: 'neutral',
    flex: '0 0 auto',
  },
};

export const TaskListItem = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { completeTask, deleteTask, uncompleteTask } = useTasks();

    return (
      <ListItem {...props} ref={ref}>
        {props.children}

        {isTaskPending(props.task) && (
          <Button
            variant="icon"
            aria-label="complete"
            onClick={() => completeTask(props.task.id)}
            sx={styles.changeStatusButton}
          >
            <Icon.CircleCheckboxBlank size={24} />
          </Button>
        )}

        {isTaskComplete(props.task) && (
          <Button
            variant="icon"
            aria-label="uncomplete"
            onClick={() => uncompleteTask(props.task.id)}
            sx={styles.changeStatusButton}
          >
            <Icon.CircleCheckboxChecked size={24} />
          </Button>
        )}

        <Text
          sx={{
            ...styles.title,
            textDecoration: isTaskComplete(props.task)
              ? 'line-through'
              : 'none',
          }}
        >
          {props.task.title}
        </Text>

        <Button
          variant="icon"
          aria-label="delete"
          onClick={() => deleteTask(props.task.id)}
          sx={styles.deleteButton}
        >
          <Icon.DeleteBin size={24} />
        </Button>
      </ListItem>
    );
  },
);
