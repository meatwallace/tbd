import * as React from 'react';
import { ListItem } from './ListItem';
import { useTasks } from '../state/useTasks';
import { Task } from '../types';

type Props = Task & {};

export function TaskListItem(props: Props) {
  const { completeTask, deleteTask } = useTasks();

  return (
    <ListItem>
      <p>
        <span>{props.title}</span> - <span>{props.status}</span>
      </p>
      <button onClick={() => completeTask(props.id)}>complete</button>
      <button onClick={() => deleteTask(props.id)}>delete</button>
    </ListItem>
  );
}
