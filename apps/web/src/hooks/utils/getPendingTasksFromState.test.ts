import { getPendingTasksFromState } from './getPendingTasksFromState';
import { createTask } from '../../test-utils/createTask';

it('returns an array of pending tasks when provided a tasks state object', () => {
  const taskIDs = ['one', 'two', 'three'];
  const tasks = taskIDs.map((id) => createTask({ id }));

  const state = {
    completedIDs: [],
    pendingIDs: taskIDs,
    items: tasks.reduce((accum, next) => ({ ...accum, [next.id]: next }), {}),
  };

  const result = getPendingTasksFromState(state);

  expect(result).toStrictEqual(tasks);
});
