import * as React from 'react';
import { ListItem } from './ListItem';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types';
import { isTaskComplete } from '../utils/isTaskComplete';
import { isTaskPending } from '../utils/isTaskPending';

type Props = { task: Task };

export function TaskListItem(props: Props) {
  // TODO: review performance implication of including the hook in every list item
  const { completeTask, deleteTask, uncompleteTask } = useTasks();

  return (
    <ListItem>
      <p>
        <span>{props.task.title}</span> - <span>{props.task.status}</span>
      </p>

      {isTaskPending(props.task) && (
        <button onClick={() => completeTask(props.task.id)}>complete</button>
      )}

      {isTaskComplete(props.task) && (
        <button onClick={() => uncompleteTask(props.task.id)}>
          uncomplete
        </button>
      )}

      <button onClick={() => deleteTask(props.task.id)}>delete</button>
    </ListItem>
  );
}
