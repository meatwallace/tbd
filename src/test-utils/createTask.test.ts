import { TaskStatus } from '../types';
import { createTask } from './createTask';

it('returns a valid task object', () => {
  const result = createTask();

  expect.assertions(1);

  expect(result).toStrictEqual({
    id: expect.any(String),
    title: expect.any(String),
    created: expect.any(Date),
    updated: null,
    status: TaskStatus.Pending,
  });
});

it("can be passed an object that will be used to set the task's properties", () => {
  const task = {
    id: 'abcd1234',
    title: 'A very specific task title',
    created: new Date(),
    updated: new Date(),
    status: TaskStatus.Completed,
  };

  const result = createTask(task);

  expect.assertions(1);

  expect(result).toStrictEqual(task);
});
