import { getCompletedTasksFromState } from './getCompletedTasksFromState';
import { createTask } from '../../test-utils/createTask';

it('returns an array of completed tasks when provided a tasks state object', () => {
  const taskIDs = ['one', 'two', 'three'];
  const tasks = taskIDs.map((id) => createTask({ id }));

  const state = {
    completedIDs: taskIDs,
    pendingIDs: [],
    items: tasks.reduce((accum, next) => ({ ...accum, [next.id]: next }), {}),
  };

  const result = getCompletedTasksFromState(state);

  expect(result).toStrictEqual(tasks);
});
