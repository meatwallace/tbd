import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

function setupTest() {
  render(<App />);

  const newTaskInput = screen.getByPlaceholderText('Task name');
  const addTaskButton = screen.getByRole('button', { name: /^add task$/i });

  const viewAllTasksButton = screen.getByRole('button', {
    name: /^all$/i,
  });

  const viewCompletedTasksButton = screen.getByRole('button', {
    name: /^completed$/i,
  });

  const viewPendingTasksButton = screen.getByRole('button', {
    name: /^pending$/i,
  });

  const elements = {
    addTaskButton,
    newTaskInput,
    viewAllTasksButton,
    viewCompletedTasksButton,
    viewPendingTasksButton,
  };

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

it('only shows pending tasks by default', async () => {
  const { utils } = setupTest();

  await utils.createTask('Completed task');

  const completeTaskButton = screen.getByRole('button', {
    name: /^complete$/i,
  });

  const completedTask = screen.getByText('Completed task');

  await act(async () => userEvent.click(completeTaskButton));

  await utils.createTask('Pending task');

  const pendingTask = screen.getByText('Pending task');

  expect.assertions(2);

  expect(completedTask).not.toBeInTheDocument();
  expect(pendingTask).toBeInTheDocument();
});

it("only shows completed tasks when the status filter is set to 'completed'", async () => {
  const { elements, utils } = setupTest();

  await utils.createTask('Completed task');

  const completeTaskButton = screen.getByRole('button', {
    name: /^complete$/i,
  });

  await act(async () => userEvent.click(completeTaskButton));

  await utils.createTask('Pending task');

  const pendingTask = screen.getByText('Pending task');

  await act(async () => userEvent.click(elements.viewCompletedTasksButton));

  const completedTask = screen.getByText('Completed task');

  expect.assertions(2);

  expect(completedTask).toBeInTheDocument();
  expect(pendingTask).not.toBeInTheDocument();
});

it("only shows pending tasks when the status filter is set to 'pending'", async () => {
  const { elements, utils } = setupTest();

  await utils.createTask('Completed task');

  const completeTaskButton = screen.getByRole('button', {
    name: /^complete$/i,
  });

  await act(async () => userEvent.click(completeTaskButton));

  await utils.createTask('Pending task');

  await act(async () => userEvent.click(elements.viewCompletedTasksButton));

  const completedTask = screen.getByText('Completed task');

  await act(async () => userEvent.click(elements.viewPendingTasksButton));

  const pendingTask = screen.getByText('Pending task');

  expect.assertions(2);

  expect(completedTask).not.toBeInTheDocument();
  expect(pendingTask).toBeInTheDocument();
});

it("shows all tasks when the status filter is set to 'all'", async () => {
  const { elements, utils } = setupTest();

  await utils.createTask('Completed task');

  const completeTaskButton = screen.getByRole('button', {
    name: /^complete$/i,
  });

  await act(async () => userEvent.click(completeTaskButton));

  await utils.createTask('Pending task');

  await act(async () => userEvent.click(elements.viewAllTasksButton));

  const completedTask = screen.getByText('Completed task');
  const pendingTask = screen.getByText('Pending task');

  expect.assertions(2);

  expect(completedTask).toBeInTheDocument();
  expect(pendingTask).toBeInTheDocument();
});

it("removes a task from the list when it's corresponding delete button is pressed", async () => {
  const { elements, utils } = setupTest();

  await utils.createTask('Deleted task');

  const deleteTaskButton = screen.getByRole('button', {
    name: /^delete$/i,
  });

  await utils.createTask('Pending task');
  await act(async () => userEvent.click(elements.viewAllTasksButton));

  const deletedTask = screen.getByText('Deleted task');
  const pendingTask = screen.getByText('Pending task');

  await act(async () => userEvent.click(deleteTaskButton));

  expect.assertions(2);

  expect(deletedTask).not.toBeInTheDocument();
  expect(pendingTask).toBeInTheDocument();
});

it("sets a completed task's status to pending when it's uncomplete button is pressed", async () => {
  const { elements, utils } = setupTest();

  await utils.createTask('Uncompleted task');

  const completeTaskButton = screen.getByRole('button', {
    name: /^complete$/i,
  });

  await act(async () => userEvent.click(completeTaskButton));
  await act(async () => userEvent.click(elements.viewCompletedTasksButton));

  const uncompleteTaskButton = screen.getByRole('button', {
    name: /^uncomplete$/i,
  });

  let task = screen.getByText('Uncompleted task');

  await act(async () => userEvent.click(uncompleteTaskButton));

  expect.assertions(2);

  expect(task).not.toBeInTheDocument();

  await act(async () => userEvent.click(elements.viewPendingTasksButton));

  task = screen.getByText('Uncompleted task');

  expect(task).toBeInTheDocument();
});
