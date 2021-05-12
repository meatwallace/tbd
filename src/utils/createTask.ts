import { nanoid } from "nanoid";
import { TaskStatus, Task } from "../types";

type TaskParts = {
  title: string;
};

// TODO: extract. cover with a snapshot test. this can be used as a test helper, too.
export function createTask(task: TaskParts): Task {
  return {
    id: nanoid(),
    title: task.title,
    status: TaskStatus.Pending,
    created: new Date(),
    updated: null
  };
}
