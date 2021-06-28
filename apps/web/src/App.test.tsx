import { act, getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import invariant from 'tiny-invariant';
import {
  mockGetComputedSpacing,
  mockDndElSpacing,
  makeDnd,
  DND_DRAGGABLE_DATA_ATTR,
  DND_DIRECTION_UP,
} from 'react-beautiful-dnd-test-utils';
import { App } from './App';

// --- SETUP & TEARDOWN
function setupTest() {
  return render(<App />);
}

// --- UTILS
// NOTE: these utilities *ARE* test code themselves. do *NOT* mindlessly change
// these to fix broken tests. these must reflect our desired behaviour, and
// exist simply to make our tests concise.
async function createTask(title: string) {
  const newTaskInput = screen.getByPlaceholderText('Task name');
  const addTaskButton = screen.getByRole('button', { name: /^add task$/i });

  userEvent.type(newTaskInput, title);

  await act(async () => userEvent.click(addTaskButton));
}

async function completeTask(title: string) {
  const task = screen.getByText(title).closest('li');

  invariant(task);

  const complete = getByRole(task, 'button', {
    name: /^complete$/i,
  });

  await act(async () => userEvent.click(complete));
}

async function uncompleteTask(title: string) {
  const task = screen.getByText(title).closest('li');

  invariant(task);

  const uncomplete = getByRole(task, 'button', {
    name: /^uncomplete$/i,
  });

  await act(async () => userEvent.click(uncomplete));
}

async function deleteTask(title: string) {
  const task = screen.getByText(title).closest('li');

  invariant(task);

  const deleteButton = getByRole(task, 'button', {
    name: /^delete/i,
  });

  await act(async () => userEvent.click(deleteButton));
}

async function showCompletedTasks() {
  const showCompletedTasksButton = screen.getByRole('button', {
    name: /^show completed tasks$/i,
  });

  await act(async () => userEvent.click(showCompletedTasksButton));
}

async function hideCompletedTasks() {
  const hideCompletedTasksButton = screen.getByRole('button', {
    name: /^hide completed tasks$/i,
  });

  await act(async () => userEvent.click(hideCompletedTasksButton));
}

// --- TESTS
it('adds a pending task to the list when a new task is created', async () => {
  setupTest();

  await createTask('A test task');

  expect(screen.queryByText('A test task')).toBeInTheDocument();
});

it('displays tasks sorted by newest first', async () => {
  setupTest();

  await createTask('Test task #1');
  await createTask('Test task #2');
  await createTask('Test task #3');

  const tasks = screen.getAllByText(/Test task #[1-3]/);

  expect.assertions(4);

  expect(tasks).toHaveLength(3);
  expect(tasks[0]).toHaveTextContent('Test task #3');
  expect(tasks[1]).toHaveTextContent('Test task #2');
  expect(tasks[2]).toHaveTextContent('Test task #1');
});

it('only shows pending tasks by default', async () => {
  setupTest();

  await createTask('Pending task');
  await createTask('Completed task');
  await completeTask('Completed task');

  expect.assertions(2);

  expect(screen.queryByText('Pending task')).toBeInTheDocument();
  expect(screen.queryByText('Completed task')).not.toBeInTheDocument();
});

it('reorders pending tasks when they are drag and dropped', async () => {
  const reactTestingLibraryUtils = setupTest();

  await createTask('Pending task #1');
  await createTask('Pending task #2');
  await createTask('Pending task #3');

  // it's important we mock after we create our tasks - react testing library
  // uses the mock APIs in it's `getByRole` function
  mockDndElSpacing(reactTestingLibraryUtils);
  mockGetComputedSpacing();

  await makeDnd({
    getByText: reactTestingLibraryUtils.getByText,
    getDragEl: () =>
      screen.getByText('Pending task #1').closest(DND_DRAGGABLE_DATA_ATTR),
    direction: DND_DIRECTION_UP,
    positions: 2,
  });

  const tasks = screen.getAllByText(/Pending task #[1-3]/);

  expect.assertions(4);

  expect(tasks).toHaveLength(3);
  expect(tasks[0]).toHaveTextContent('Pending task #1');
  expect(tasks[1]).toHaveTextContent('Pending task #3');
  expect(tasks[2]).toHaveTextContent('Pending task #2');
});

it("shows completed tasks when 'show completed tasks' is pressed", async () => {
  setupTest();

  await createTask('Pending task');
  await createTask('Completed task');
  await completeTask('Completed task');
  await showCompletedTasks();

  expect.assertions(2);

  expect(screen.queryByText('Pending task')).toBeInTheDocument();
  expect(screen.queryByText('Completed task')).toBeInTheDocument();
});

it("replaces the 'show completed tasks' button with a 'hide completed tasks' button when pressed", async () => {
  setupTest();

  await showCompletedTasks();

  expect.assertions(2);

  expect(
    screen.queryByRole('button', { name: /^show completed tasks$/i }),
  ).not.toBeInTheDocument();

  expect(
    screen.queryByRole('button', { name: /^hide completed tasks$/i }),
  ).toBeInTheDocument();
});

it("hides completed tasks when 'hide completed tasks' is pressed", async () => {
  setupTest();

  await createTask('Pending task');
  await createTask('Completed task');
  await completeTask('Completed task');
  await showCompletedTasks();
  await hideCompletedTasks();

  expect.assertions(2);

  expect(screen.queryByText('Completed task')).not.toBeInTheDocument();
  expect(screen.queryByText('Pending task')).toBeInTheDocument();
});

it("removes a task from the list when it's corresponding delete button is pressed", async () => {
  setupTest();

  await createTask('Pending task');
  await createTask('Deleted task');
  await deleteTask('Deleted task');

  expect.assertions(2);

  expect(screen.queryByText('Deleted task')).not.toBeInTheDocument();
  expect(screen.queryByText('Pending task')).toBeInTheDocument();
});

it("sets a completed task's status to pending when it's uncomplete button is pressed", async () => {
  setupTest();

  await createTask('Uncompleted task');
  await completeTask('Uncompleted task');
  await showCompletedTasks();
  await uncompleteTask('Uncompleted task');

  expect.assertions(2);

  expect(screen.queryByText('Uncompleted task')).toBeInTheDocument();

  await hideCompletedTasks();

  expect(screen.queryByText('Uncompleted task')).toBeInTheDocument();
});

it('lists completed tasks after pending tasks', async () => {
  setupTest();

  await createTask('Test task #1');
  await createTask('Test task #2');
  await createTask('Test task #3');
  await completeTask('Test task #3');
  await showCompletedTasks();

  const tasks = screen.getAllByText(/Test task #[1-3]/);

  expect.assertions(4);

  expect(tasks).toHaveLength(3);
  expect(tasks[0]).toHaveTextContent('Test task #2');
  expect(tasks[1]).toHaveTextContent('Test task #1');
  expect(tasks[2]).toHaveTextContent('Test task #3');
});

it('appends uncompleted tasks to the list of pending tasks', async () => {
  setupTest();

  await createTask('Test task #1');
  await createTask('Test task #2');
  await createTask('Test task #3');
  await completeTask('Test task #3');
  await completeTask('Test task #2');
  await showCompletedTasks();
  await uncompleteTask('Test task #3');

  const tasks = screen.getAllByText(/Test task #[1-3]/);

  expect.assertions(4);

  expect(tasks).toHaveLength(3);
  expect(tasks[0]).toHaveTextContent('Test task #1');
  expect(tasks[1]).toHaveTextContent('Test task #3');
  expect(tasks[2]).toHaveTextContent('Test task #2');
});

it('prepends completed tasks to the list of completed tasks', async () => {
  setupTest();

  await createTask('Test task #1');
  await createTask('Test task #2');
  await createTask('Test task #3');
  await completeTask('Test task #3');
  await completeTask('Test task #2');
  await showCompletedTasks();

  const tasks = screen.getAllByText(/Test task #[1-3]/);

  expect.assertions(4);

  expect(tasks).toHaveLength(3);
  expect(tasks[0]).toHaveTextContent('Test task #1');
  expect(tasks[1]).toHaveTextContent('Test task #2');
  expect(tasks[2]).toHaveTextContent('Test task #3');
});
