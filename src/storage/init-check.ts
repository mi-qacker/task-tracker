import type { Storage } from "../types.ts";
import { ENCODER, STORAGE_PATH } from "./index.ts";

const INIT_STORAGE: Storage = { tasks: [] };

export async function initCheck() {
  try {
    await Deno.lstat(STORAGE_PATH);
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      const data = ENCODER.encode(JSON.stringify(INIT_STORAGE));

      await Deno.mkdir(STORAGE_PATH);
      await Deno.writeFile(STORAGE_PATH, data, { create: true });
    } else {
      throw error;
    }
  }
}
