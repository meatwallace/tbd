import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

function setupTest() {
  render(<App />);

  const newTaskInput = screen.getByPlaceholderText('Task name');
  const addTaskButton = screen.getByRole('button', { name: /add task/i });

  const elements = { newTaskInput, addTaskButton };

  const createTask = async (title: string) => {
    userEvent.type(newTaskInput, title);

    await act(async () => userEvent.click(addTaskButton));
  };

  const utils = { createTask };

  return { elements, utils };
}

it('adds a pending task to the list when a new task is created', async () => {
  const { utils } = setupTest();

  await utils.createTask('A brand new task');

  const newTask = screen.getByText('A brand new task');

  expect(newTask).toBeInTheDocument();
});

it('displays tasks sorted by newest first', async () => {
  const { utils } = setupTest();

  await utils.createTask('Test task #1');
  await utils.createTask('Test task #2');
  await utils.createTask('Test task #3');

  const tasks = screen.getAllByText(/Test task #[1-3]/);

  expect.assertions(4);

  expect(tasks).toHaveLength(3);
  expect(tasks[0]).toHaveTextContent('Test task #3');
  expect(tasks[1]).toHaveTextContent('Test task #2');
  expect(tasks[2]).toHaveTextContent('Test task #1');
});

it.skip('only shows pending tasks by default', () => {
  //
});

it.skip("only shows pending tasks when the status filter is set to 'pending'", () => {
  //
});

it.skip("only shows completed tasks when the status filter is set to 'completed'", () => {
  //
});

it.skip("shows all tasks when the status filter is set to 'all'", () => {
  //
});

it.skip("removes a task from the list when it's corresponding delete button is pressed", () => {
  //
});

it.skip("sets a task's status as complete when it's corresponding complete button is pressed", () => {
  //
});
