import { StatusFilter, TaskStatus } from '../../types';
import { filterTasksByStatus } from './filterTasksByStatus';
import { createTask } from '../../test-utils/createTask';

const data = [
  createTask({ status: TaskStatus.Pending }),
  createTask({ status: TaskStatus.Completed }),
  createTask({ status: TaskStatus.Pending }),
  createTask({ status: TaskStatus.Completed }),
  createTask({ status: TaskStatus.Completed }),
  createTask({ status: TaskStatus.Pending }),
];

it('returns all provided tasks when the filter is set to "all"', () => {
  const tasks = filterTasksByStatus(data, StatusFilter.All);

  expect.assertions(1);

  expect(tasks).toEqual(data);
});

it('returns only completed tasks when the filter is set to "completed"', () => {
  const result = filterTasksByStatus(data, StatusFilter.Completed);

  expect.assertions(1);

  expect(result).toSatisfyAll((task) => task.status === TaskStatus.Completed);
});

it('returns only pending tasks when the filter is set to "pending"', () => {
  const result = filterTasksByStatus(data, StatusFilter.Pending);

  expect.assertions(1);

  expect(result).toSatisfyAll((task) => task.status === TaskStatus.Pending);
});
