import path from "node:path";
import { initCheck } from "./init-check.ts";
import type { Storage } from "../types.ts";

export const STORAGE_DIR_PATH = path.resolve(Deno.cwd(), ".bin");
export const STORAGE_PATH = path.resolve(STORAGE_DIR_PATH, "storage.json");
export const ENCODER = new TextEncoder();
export const DECODER = new TextDecoder("utf-8");

await initCheck();

export async function getStorage() {
  const rawStorage = await Deno.readFile(STORAGE_PATH, {});
  const storage = JSON.parse(DECODER.decode(rawStorage)) as Storage;
  return storage;
}
