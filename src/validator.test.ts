import { assertEquals } from "@std/assert";
import { TASKS_LISTS } from "./types.ts";
import {
  validateIdArgs,
  validateIdTextArgs,
  validateTaskListArgs,
  validateTextArgs,
} from "./validator.ts";

// validateTextArgs
Deno.test("check valid args validateTextArgs", () => {
  const { text } = validateTextArgs(["text"]);
  assertEquals(text, "text");
});

// validateIdArgs
Deno.test("check valid args validateIdArgs", () => {
  const { id } = validateIdArgs(["42"]);
  assertEquals(id, 42);
});

// validateIdTextArgs
Deno.test("check valid args validateIdTextArgs", () => {
  const { id, text } = validateIdTextArgs(["42", "Task text"]);
  assertEquals(id, 42);
  assertEquals(text, "Task text");
});

// validateTaskListArgs
Deno.test("check valid args validateTaskListArgs", () => {
  Object.values(TASKS_LISTS).forEach((expectedTestList) => {
    const { taskList } = validateTaskListArgs([expectedTestList]);
    assertEquals(taskList, expectedTestList);
  });
});
Deno.test("check empty args validateTaskListArgs", () => {
  const { taskList } = validateTaskListArgs([]);
  assertEquals(taskList, undefined);
});
