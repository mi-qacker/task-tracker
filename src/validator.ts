import { type TaskList, TASKS_LISTS } from "./types.ts";

export type TextInput = { text: string };
export type IdInput = { id: number };
export type TaskListInput = { taskList?: TaskList };
export type TextIdInput = TextInput & IdInput;

export function validateTextArgs(args: string[]): TextInput {
  if (args.length !== 1) {
    throw new Error("Invalid number of arguments");
  }
  return { text: args[0] };
}

export function validateIdTextArgs(args: string[]): TextIdInput {
  if (args.length !== 2) {
    throw new Error("Invalid number of arguments");
  }
  const [rawId, rawText] = args;
  const id = parseInt(rawId);

  if (isNaN(id)) {
    throw new Error("Invalid task id");
  }

  return { id, text: rawText };
}

export function validateIdArgs(args: string[]): IdInput {
  if (args.length !== 1) {
    throw new Error("Invalid number of arguments");
  }
  const id = parseInt(args[0]);

  if (isNaN(id)) {
    throw new Error("Invalid task id");
  }

  return { id };
}

export function validateTaskListArgs(args: string[]): TaskListInput {
  if (args.length === 0) {
    return {};
  } else if (args.length === 1) {
    const taskList = args[0] as TaskList;
    if (!Object.values(TASKS_LISTS).includes(taskList)) {
      throw new Error("Invalid task list name");
    }
    return { taskList };
  }
  throw new Error("Invalid number of arguments");
}
