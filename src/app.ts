import { COMMANDS } from "./types.ts";
import {
  validateIdArgs,
  validateIdTextArgs,
  validateTaskListArgs,
  validateTextArgs,
} from "./validator.ts";
import { addTask } from "./commands/add.ts";
import { getStorage } from "./storage/index.ts";

export const app = (command: string, args: string[]) => {
  switch (command) {
    case COMMANDS.Add:
      {
        const { text } = validateTextArgs(args);
        const newTask = addTask(text);
        getStorage();
        console.log(newTask);
      }
      break;
    case COMMANDS.Update:
      validateIdTextArgs(args);
      break;
    case COMMANDS.Delete:
      validateIdArgs(args);
      break;
    case COMMANDS.List:
      validateTaskListArgs(args);
      break;
    case COMMANDS.MarkInProgress:
      validateIdArgs(args);
      break;
    case COMMANDS.MarkDone:
      validateIdArgs(args);
      break;
    case "--help":
      console.log("Available commands:", Object.values(COMMANDS));
      break;
    default:
      throw new Error(`Unknown command: ${command}`);
  }
};
