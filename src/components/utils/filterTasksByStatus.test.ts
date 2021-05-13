import { StatusFilter, TaskStatus } from '../../types';
import { filterTasksByStatus } from './filterTasksByStatus';
import { createTask } from '../../test-utils/createTask';

const data = [
  createTask({ status: TaskStatus.Pending }),
  createTask({ status: TaskStatus.Complete }),
  createTask({ status: TaskStatus.Pending }),
  createTask({ status: TaskStatus.Complete }),
  createTask({ status: TaskStatus.Complete }),
  createTask({ status: TaskStatus.Pending }),
];

it('returns all provided tasks when the filter is set to "all"', () => {
  const tasks = filterTasksByStatus(data, StatusFilter.All);

  expect.assertions(1);

  expect(tasks).toEqual(data);
});

it('returns only completed tasks when the filter is set to "complete"', () => {
  const tasks = filterTasksByStatus(data, StatusFilter.Complete);

  const result = tasks.every((task) => task.status === TaskStatus.Complete);

  expect.assertions(1);

  expect(result).toEqual(true);
});

it('returns only pending tasks when the filter is set to "pending"', () => {
  const tasks = filterTasksByStatus(data, StatusFilter.Pending);

  const result = tasks.every((task) => task.status === TaskStatus.Pending);

  expect.assertions(1);

  expect(result).toEqual(true);
});
