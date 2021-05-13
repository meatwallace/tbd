import { TaskStatus } from '../../types';
import { filterPendingTasks } from './filterPendingTasks';
import { createTask } from '../../test-utils/createTask';

it('removes all tasks that do not have a status of "pending"', () => {
  const data = [
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Complete }),
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Complete }),
    createTask({ status: TaskStatus.Complete }),
    createTask({ status: TaskStatus.Pending }),
  ];

  const tasks = filterPendingTasks(data);

  const result = tasks.every((task) => task.status === TaskStatus.Pending);

  expect.assertions(1);

  expect(result).toEqual(true);
});
