import React from 'react';
import { CreateTaskInput } from './CreateTaskInput';
import { List } from './List';
import { TaskListItem } from './TaskListItem';
import { filterTasksByStatus } from './utils/filterTasksByStatus';
import { useTasks } from '../hooks/useTasks';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { Task } from '../types';

type Props = {};

export function TaskList(props: Props) {
  const { tasks } = useTasks();
  const { filter } = useTasksFilter();

  // TODO: memoize
  const filteredTasks = filterTasksByStatus(tasks, filter.status);

  // reverse the sort order so that our newest tasks show first
  const sortedTasks = filteredTasks.reverse();

  return (
    <React.Fragment>
      <CreateTaskInput />
      <List>
        {sortedTasks.map((task: Task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </List>
    </React.Fragment>
  );
}
