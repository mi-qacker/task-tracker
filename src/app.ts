export const COMMANDS = {
  Add: "add",
  Update: "update",
  Delete: "delete",
  List: "list",
  MarkInProgress: "mark-in-progress",
  MarkDone: "mark-done",
};

export const app = (command: string, args: string[]) => {
  switch (command) {
    case COMMANDS.Add:
      console.log("Add task", args);
      break;
    case COMMANDS.Update:
      console.log("Update task", args);
      break;
    case COMMANDS.Delete:
      console.log("Delete task", args);
      break;
    case COMMANDS.List:
      console.log("List of tasks", args);
      break;
    case COMMANDS.MarkInProgress:
      console.log("Mark in progress of tasks", args);
      break;
    case COMMANDS.MarkDone:
      console.log("Mark done of tasks", args);
      break;
    case "--help":
      console.log("Available commands:", Object.values(COMMANDS));
      break;
    default:
      throw new Error(`Unknown command: ${command}`);
  }
};
