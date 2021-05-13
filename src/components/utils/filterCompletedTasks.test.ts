import { TaskStatus } from '../../types';
import { filterCompletedTasks } from './filterCompletedTasks';
import { createTask } from '../../test-utils/createTask';

it('removes all tasks that do not have a status of "complete"', () => {
  const data = [
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Completed }),
    createTask({ status: TaskStatus.Pending }),
    createTask({ status: TaskStatus.Completed }),
    createTask({ status: TaskStatus.Completed }),
    createTask({ status: TaskStatus.Pending }),
  ];

  const tasks = filterCompletedTasks(data);

  expect.assertions(1);

  expect(tasks).toSatisfyAll((task) => task.status === TaskStatus.Completed);
});
