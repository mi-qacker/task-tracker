import { assertThrows } from "@std/assert";
import { app } from "./app.ts";

Deno.test("throw error for run unavailable command", () => {
  assertThrows(() => {
    app("unavailable", []);
  });
});
