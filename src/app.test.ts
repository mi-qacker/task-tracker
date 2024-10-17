import { assert, assertThrows } from "@std/assert";
import { app, COMMANDS } from "./app.ts";

Deno.test("throw error for run unavailable command", () => {
  assertThrows(() => {
    app("unavailable", []);
  });
});

Object.entries(COMMANDS).forEach(([commandName, command]) => {
  Deno.test(`success run available command: ${commandName}`, () => {
    try {
      app(command, []);
    } catch (error) {
      assert(false, `${command}: ${error}`);
    }
    assert(true);
  });
});
