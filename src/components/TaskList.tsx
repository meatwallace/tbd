import * as React from 'react';
import { List } from './List';
import { TaskListItem } from './TaskListItem';
import { useTasks } from '../state/useTasks';
import { Task } from '../types';

type Props = {};

export function TaskList(props: Props) {
  // TODO: review performance implication of including the hook in every list item
  const { tasks } = useTasks();

  return (
    <List>
      {tasks.map((task: Task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </List>
  );
}
