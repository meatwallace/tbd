import { TaskStatus } from '../../types';
import { filterCompleteTasks } from './filterCompleteTasks';
import { createTask } from '../../test-utils/createTask';

it('removes all tasks that do not have a status of "complete"', () => {
  const data = [
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Complete }),
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Complete }),
    createTask({ status: TaskStatus.Complete }),
    createTask({ status: TaskStatus.Pending }),
  ];

  const tasks = filterCompleteTasks(data);

  const result = tasks.every((task) => task.status === TaskStatus.Complete);

  expect.assertions(1);

  expect(result).toEqual(true);
});
