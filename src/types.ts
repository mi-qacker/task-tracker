export const COMMANDS = Object.freeze({
  Add: "add",
  Update: "update",
  Delete: "delete",
  List: "list",
  MarkInProgress: "mark-in-progress",
  MarkDone: "mark-done",
});

export const TASKS_LISTS = Object.freeze({
  Done: "done",
  Todo: "todo",
  InProgress: "in-progress",
});

export type TaskList = (typeof TASKS_LISTS)[keyof typeof TASKS_LISTS];
