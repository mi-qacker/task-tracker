import { app } from "./src/app.ts";

const [command, ...args] = Deno.args;

app(command, args);
