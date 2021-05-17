import { TaskStatus } from '../../types';
import { filterPendingTasks } from './filterPendingTasks';
import { createTask } from '../../test-utils/createTask';

it('removes all tasks that do not have a status of "pending"', () => {
  const data = [
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Completed }),
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Completed }),
    createTask({ status: TaskStatus.Completed }),
    createTask({ status: TaskStatus.Pending }),
  ];

  const result = filterPendingTasks(data);

  expect.assertions(1);

  expect(result).toSatisfyAll((task) => task.status === TaskStatus.Pending);
});
