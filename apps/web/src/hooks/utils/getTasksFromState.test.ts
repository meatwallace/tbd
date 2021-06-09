import { getTasksFromState } from './getTasksFromState';
import { createTask } from '../../test-utils/createTask';

it('returns an array of tasks when provided a tasks state object', () => {
  const taskIDs = ['one', 'two', 'three'];
  const tasks = taskIDs.map((id) => createTask({ id }));

  const state = {
    ids: taskIDs,
    items: tasks.reduce((accum, next) => ({ ...accum, [next.id]: next }), {}),
  };

  const result = getTasksFromState(state);

  expect(result).toStrictEqual(tasks);
});
