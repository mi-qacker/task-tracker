import { v1 as uuidV1 } from "@std/uuid";
import { Task } from "../types.ts";

export function addTask(description: string): Task {
  return {
    id: uuidV1.generate(),
    description,
    status: "todo",
    createdAt: new Date(),
  };
}
