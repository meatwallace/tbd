import { nanoid } from 'nanoid';
import { Task, TaskStatus } from '../types';

export function createTask(partial: Partial<Task> = {}): Task {
  return {
    id: nanoid(),
    title: 'Run a successful test case',
    status: TaskStatus.Pending,
    created: new Date(),
    updated: null,
    ...partial,
  };
}
