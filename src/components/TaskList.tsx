import * as React from 'react';
import { List } from './List';
import { TaskListItem } from './TaskListItem';
import { useTasks } from '../state/useTasks';
import type { Task } from '../types';

type Props = {};

export function TaskList(props: Props) {
  const { tasks } = useTasks();

  return (
    <List>
      {tasks.map((task: Task) => (
        <TaskListItem key={task.id} {...task} />
      ))}
    </List>
  );
}
