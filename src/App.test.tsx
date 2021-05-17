import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

it('adds a pending task to the list when a new task is created', async () => {
  render(<App />);

  const createTaskInput = screen.getByPlaceholderText('Task name');
  const addTaskButton = screen.getByText('Add task');

  userEvent.type(createTaskInput, 'A brand new task');

  await act(async () => userEvent.click(addTaskButton));

  const newTask = screen.getByText('A brand new task');

  expect(newTask).toBeInTheDocument();
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
