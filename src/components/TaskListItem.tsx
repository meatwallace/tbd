import * as React from 'react';
import { ListItem } from './ListItem';
import { useTasks } from '../state/useTasks';
import { Task } from '../types';

type Props = Task & {};

export function TaskListItem(props: Props) {
  const { deleteTask } = useTasks();

  return (
    <ListItem>
      <span>{props.title}</span>
      <button onClick={() => deleteTask(props.id)}>delete</button>
    </ListItem>
  );
}
